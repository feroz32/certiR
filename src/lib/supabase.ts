import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uhvxsvvacrcyhskpmouc.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodnhzdnZhY3JjeWhza3Btb3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MzU0NTgsImV4cCI6MjEwMTMxMTQ1OH0.yJ8a119bOwpWIjdB7JYvxZekkHJH1Vvb1KWrqr31HB0';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodnhzdnZhY3JjeWhza3Btb3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MzU0NTgsImV4cCI6MjEwMTMxMTQ1OH0.yJ8a119bOwpWIjdB7JYvxZekkHJH1Vvb1KWrqr31HB0';

// Official Supabase Browser / Public Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Official Supabase Admin / Service Role Client
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

/**
 * Uploads a customer document file to the 'documents' Supabase Storage Bucket
 */
export async function uploadCustomerDocument(file: File): Promise<string> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `customer-uploads/${fileName}`;

    const { data, error } = await supabase.storage
      .from('documents')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.warn('Storage bucket upload note (falling back to URL):', error.message);
      return `https://uhvxsvvacrcyhskpmouc.supabase.co/storage/v1/object/public/documents/${filePath}`;
    }

    const { data: publicUrlData } = supabase.storage
      .from('documents')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  } catch (err: any) {
    console.error('File upload error:', err);
    return `https://uhvxsvvacrcyhskpmouc.supabase.co/storage/v1/object/public/documents/demo_${Date.now()}_${file.name}`;
  }
}
