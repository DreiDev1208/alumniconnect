import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxogetoczvmjvqkmnoyy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b2dldG9jenZtanZxa21ub3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwODM0NzYsImV4cCI6MjAxMDY1OTQ3Nn0.17-cQRh41_fo0auF3WL-g_Ti3mHVDe9LJWoq3nseE6s'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;