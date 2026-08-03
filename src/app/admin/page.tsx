'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  RefreshCw, 
  FileText, 
  Trash2, 
  Eye, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ApplicationRecord {
  id: string;
  application_number?: string;
  full_name: string;
  phone_number: string;
  email: string;
  certificate_type: string;
  address?: string;
  pickup_address?: string;
  preferred_pickup_date?: string;
  preferred_pickup_time?: string;
  uploaded_documents?: string[];
  additional_notes?: string;
  status: 'Pending' | 'In Progress' | 'Documents Collected' | 'Submitted' | 'Approved' | 'Rejected' | 'Completed';
  created_at: string;
}

export default function AdminDashboardPage() {
  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [certFilter, setCertFilter] = useState<string>('All');

  // Detail Modal state
  const [selectedApp, setSelectedApp] = useState<ApplicationRecord | null>(null);

  const statuses = [
    'All',
    'Pending',
    'In Progress',
    'Documents Collected',
    'Submitted',
    'Approved',
    'Rejected',
    'Completed'
  ];

  const fetchApplications = async () => {
    setLoading(true);
    try {
      // 1. Fetch from Supabase Table
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setApplications(data);
      } else {
        // Fallback to API endpoint
        const res = await fetch('/api/applications');
        const resData = await res.json();
        if (resData.success && resData.applications) {
          setApplications(resData.applications);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();

    // Setup Supabase Realtime Subscription for instant synchronization
    const subscription = supabase
      .channel('public:applications')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, () => {
        fetchApplications();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Status Change Handler
  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      // 1. Update in Supabase DB
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        // Fallback to API route
        await fetch('/api/applications', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, status: newStatus })
        });
      }

      setApplications(prev =>
        prev.map(app => (app.id === id ? { ...app, status: newStatus as any } : app))
      );

      if (selectedApp && selectedApp.id === id) {
        setSelectedApp(prev => prev ? { ...prev, status: newStatus as any } : null);
      }

    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete Record Handler
  const handleDeleteApp = async (id: string) => {
    if (!confirm('Are you sure you want to delete this application permanently from Supabase?')) return;

    try {
      const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', id);

      if (error) {
        await fetch(`/api/applications?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      }

      setApplications(prev => prev.filter(app => app.id !== id));
      if (selectedApp?.id === id) setSelectedApp(null);
    } catch (err) {
      console.error('Failed to delete application:', err);
    }
  };

  // Filtered List Computation
  const filteredApps = useMemo(() => {
    return applications.filter(app => {
      const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
      const matchesCert = certFilter === 'All' || (app.certificate_type || '').toLowerCase().includes(certFilter.toLowerCase());
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        (app.full_name || '').toLowerCase().includes(query) ||
        (app.email || '').toLowerCase().includes(query) ||
        (app.phone_number || '').toLowerCase().includes(query) ||
        (app.application_number || app.id || '').toLowerCase().includes(query) ||
        (app.certificate_type || '').toLowerCase().includes(query);

      return matchesStatus && matchesCert && matchesSearch;
    });
  }, [applications, statusFilter, certFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 gradient-glow space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Real-Time Supabase Sync • Admin Control</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              CertiR Applications Admin Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Manage, search, filter, update statuses, and inspect customer uploaded documents in real time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchApplications}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-indigo-500' : ''}`} />
              <span>Sync Now</span>
            </button>
            <div className="p-3.5 rounded-2xl bg-indigo-600 text-white font-bold text-center shrink-0">
              <span className="text-[10px] text-indigo-200 uppercase block">Total Rows</span>
              <span className="text-xl font-black">{applications.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Search */}
        <div className="md:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, phone, certificate type, or Application ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none font-medium"
          />
        </div>

        {/* Status Filter */}
        <div className="md:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="All">Filter by Status (All)</option>
            {statuses.filter(s => s !== 'All').map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* Certificate Type Filter */}
        <div className="md:col-span-3">
          <select
            value={certFilter}
            onChange={(e) => setCertFilter(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="All">Filter by Certificate (All)</option>
            <option value="Aadhaar">Aadhaar Services</option>
            <option value="PAN">PAN Card</option>
            <option value="Income">Income Certificate</option>
            <option value="Domicile">Domicile / Residence</option>
            <option value="Driving">Driving Licence</option>
            <option value="Passport">Passport</option>
            <option value="GST">GST Registration</option>
          </select>
        </div>

      </div>

      {/* Applications Table */}
      <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            
            <thead className="bg-slate-100/80 dark:bg-slate-900/80 text-slate-500 uppercase font-extrabold text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-5 py-4">App ID / Date</th>
                <th className="px-5 py-4">Applicant & Contact</th>
                <th className="px-5 py-4">Certificate Type</th>
                <th className="px-5 py-4">Pickup Schedule</th>
                <th className="px-5 py-4">Status & Sync</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
              {filteredApps.length > 0 ? (
                filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    
                    {/* App ID & Date */}
                    <td className="px-5 py-4 space-y-1">
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block">
                        {app.application_number || app.id.substring(0, 13)}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {new Date(app.created_at).toLocaleDateString()}
                      </span>
                    </td>

                    {/* Applicant & Contact */}
                    <td className="px-5 py-4 space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white block">
                        {app.full_name}
                      </span>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-500" />{app.phone_number}</span>
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-indigo-500" />{app.email}</span>
                      </div>
                    </td>

                    {/* Certificate Type */}
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        {app.certificate_type}
                      </span>
                    </td>

                    {/* Pickup Schedule */}
                    <td className="px-5 py-4 text-[11px] space-y-0.5">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">
                        {app.preferred_pickup_date || 'Asap'}
                      </span>
                      <span className="text-slate-400 block text-[10px]">
                        {app.preferred_pickup_time || 'Morning Slot'}
                      </span>
                    </td>

                    {/* Status Dropdown */}
                    <td className="px-5 py-4">
                      <select
                        value={app.status || 'Pending'}
                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                        disabled={updatingId === app.id}
                        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border shadow-sm transition-all focus:outline-none ${
                          app.status === 'Completed' || app.status === 'Approved'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                            : app.status === 'Rejected'
                            ? 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950 dark:text-rose-300'
                            : app.status === 'In Progress' || app.status === 'Documents Collected'
                            ? 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-300'
                            : 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Documents Collected">Documents Collected</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                          title="View Full Details & Documents"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDeleteApp(app.id)}
                          className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors"
                          title="Delete Application from Supabase"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-500 text-xs">
                    No applications match your search or filter parameters.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* DETAIL INSPECTOR MODAL */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="glass-card w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">Application Inspector</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {selectedApp.certificate_type}
              </h2>
              <span className="text-xs font-mono font-bold text-slate-500">Ref ID: {selectedApp.application_number || selectedApp.id}</span>
            </div>

            <div className="space-y-3 text-xs bg-slate-100/70 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-500">Applicant Full Name:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedApp.full_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone Number:</span>
                <span className="font-semibold text-emerald-600">{selectedApp.phone_number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email Address:</span>
                <span className="font-semibold text-indigo-600">{selectedApp.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doorstep Pickup Schedule:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {selectedApp.preferred_pickup_date} ({selectedApp.preferred_pickup_time})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pickup Address:</span>
                <span className="font-semibold text-right max-w-[250px]">{selectedApp.pickup_address || selectedApp.address}</span>
              </div>
              {selectedApp.additional_notes && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 block mb-0.5">Additional Notes:</span>
                  <p className="font-medium text-slate-700 dark:text-slate-300 italic">{selectedApp.additional_notes}</p>
                </div>
              )}
            </div>

            {/* Uploaded Documents List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Uploaded Customer Documents:
              </h4>

              {selectedApp.uploaded_documents && selectedApp.uploaded_documents.length > 0 ? (
                <div className="space-y-2">
                  {selectedApp.uploaded_documents.map((docUrl, idx) => (
                    <a
                      key={idx}
                      href={docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-indigo-500" />
                        <span className="font-bold line-clamp-1">Document File #{idx + 1}</span>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">No external file attached.</p>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-5 py-2.5 rounded-xl gradient-bg text-white font-bold text-xs"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
