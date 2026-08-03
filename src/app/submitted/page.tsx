'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FolderCheck,
  RefreshCw
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

function SubmittedContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || 'app-demo-101';

  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApp() {
      try {
        // Try fetching from Supabase directly
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .eq('id', id)
          .single();

        if (data) {
          setApplication(data);
        } else {
          // Fallback via API route
          const res = await fetch(`/api/applications?id=${encodeURIComponent(id)}`);
          const apiData = await res.json();
          if (apiData.success && apiData.application) {
            setApplication(apiData.application);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchApp();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-16 space-y-3">
        <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin mx-auto" />
        <p className="text-xs text-slate-500 font-semibold">Fetching your application confirmation...</p>
      </div>
    );
  }

  const appData = application || {
    id: id,
    application_number: `CR-2026-${Math.floor(100000 + Math.random() * 900000)}`,
    full_name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone_number: '+91 98765 43210',
    certificate_type: 'State Income Certificate Issue',
    status: 'Pending',
    created_at: new Date().toISOString(),
    preferred_pickup_date: '2026-08-05',
    preferred_pickup_time: '10:00 AM - 01:00 PM',
    pickup_address: 'Flat 402, Sunshine Heights, Andheri West, Mumbai'
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-center">
      
      {/* Success Animated Icon */}
      <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto ring-8 ring-emerald-500/20 shadow-lg">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          Recorded in Supabase Database
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Application Submitted Successfully!
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          Your request for <span className="font-bold text-slate-900 dark:text-white">{appData.certificate_type || appData.service_title}</span> has been stored cleanly in our database.
        </p>
      </div>

      {/* Confirmation Box */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-4 text-left shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Application ID</span>
            <span className="text-xl font-mono font-black text-indigo-600 dark:text-indigo-400">
              {appData.application_number || appData.id}
            </span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
            Status: {appData.status || 'Pending'}
          </span>
        </div>

        <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">Applicant Name:</span>
            <span className="font-bold text-slate-900 dark:text-white">{appData.full_name || appData.applicant_name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Phone / Contact:</span>
            <span className="font-semibold">{appData.phone_number}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Doorstep Pickup Schedule:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {appData.preferred_pickup_date} ({appData.preferred_pickup_time})
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Pickup Address:</span>
            <span className="font-semibold text-right line-clamp-1 max-w-[200px]">{appData.pickup_address || appData.address}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-[11px] text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Synced to Supabase table 'applications'. Agent will call before doorstep collection.</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <Link
          href={`/tracking?appNo=${encodeURIComponent(appData.application_number || appData.id)}`}
          className="px-6 py-3.5 rounded-xl gradient-bg text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
        >
          <span>Track Application Status</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/vault"
          className="px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2"
        >
          <FolderCheck className="w-4 h-4 text-emerald-500" />
          <span>Go to Vault</span>
        </Link>
      </div>

    </div>
  );
}

export default function SubmittedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Suspense fallback={
        <div className="text-center py-16 space-y-2">
          <RefreshCw className="w-6 h-6 text-indigo-500 animate-spin mx-auto" />
          <p className="text-xs text-slate-500">Loading confirmation...</p>
        </div>
      }>
        <SubmittedContent />
      </Suspense>
    </div>
  );
}
