const SUPABASE_URL = 'https://dhaeigcgmsjtfbrmhgok.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_w0oUQY8O2IyamsNZG1__gg_JnwsdqB9';

// Inicializar el cliente de Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
