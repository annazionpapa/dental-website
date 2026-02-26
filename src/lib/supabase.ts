import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Consultation = {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  preferred_date: string | null;
  message: string;
  status: "new" | "in_progress" | "completed";
  created_at: string;
};
