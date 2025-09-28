import { createClient } from '@supabase/supabase-js';
import { Database } from '@shared/database';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Log environment variables for debugging
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key available:', !!supabaseKey);

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
