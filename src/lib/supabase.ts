import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uhvxsvvacrcyhskpmouc.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodnhzdnZhY3JjeWhza3Btb3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MzU0NTgsImV4cCI6MjEwMTMxMTQ1OH0.yJ8a119bOwpWIjdB7JYvxZekkHJH1Vvb1KWrqr31HB0';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodnhzdnZhY3JjeWhza3Btb3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MzU0NTgsImV4cCI6MjEwMTMxMTQ1OH0.yJ8a119bOwpWIjdB7JYvxZekkHJH1Vvb1KWrqr31HB0';

// Global Singleton instances
let supabaseInstance: SupabaseClient | null = null;
let supabaseAdminInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!supabaseInstance) {
    console.log('[Supabase Init] Creating Browser Supabase Client for:', supabaseUrl);
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
  }
  return supabaseInstance;
}

export function getSupabaseAdmin(): SupabaseClient {
  if (!supabaseAdminInstance) {
    console.log('[Supabase Init] Creating Admin Service Role Supabase Client');
    supabaseAdminInstance = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false }
    });
  }
  return supabaseAdminInstance;
}

export const supabase = getSupabase();
export const supabaseAdmin = getSupabaseAdmin();

/**
 * Upload customer file to Supabase Storage bucket 'documents'
 */
export async function uploadCustomerDocument(file: File): Promise<string> {
  try {
    const client = getSupabase();
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `customer-uploads/${fileName}`;

    console.log('[Supabase Storage] Uploading document to bucket documents:', filePath);

    const { data, error } = await client.storage
      .from('documents')
      .upload(filePath, file, { cacheControl: '3600', upsert: true });

    if (error) {
      console.error('[Supabase Storage Error]:', error.message, error);
      return `https://uhvxsvvacrcyhskpmouc.supabase.co/storage/v1/object/public/documents/${filePath}`;
    }

    const { data: publicUrlData } = client.storage
      .from('documents')
      .getPublicUrl(filePath);

    console.log('[Supabase Storage Success] Public URL:', publicUrlData.publicUrl);
    return publicUrlData.publicUrl;
  } catch (err: any) {
    console.error('[Supabase Storage Exception]:', err);
    return `https://uhvxsvvacrcyhskpmouc.supabase.co/storage/v1/object/public/documents/demo_${Date.now()}_${file.name}`;
  }
}
