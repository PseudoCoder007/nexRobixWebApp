import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ciwunaknnzvcaxxxiebl.supabase.co";
const supabaseKey = 
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  "sb_publishable_wWHsRpe6EAtMi8wVCE6Hfg_iy5vARe4";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseKey && 
  !supabaseUrl.includes("mock-project")
);

export const supabase = createClient(supabaseUrl, supabaseKey);
