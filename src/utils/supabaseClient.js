import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores con tus credenciales de tu proyecto en Supabase Dashboard
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tu-proyecto.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'tu-clave-anonima-aqui';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);