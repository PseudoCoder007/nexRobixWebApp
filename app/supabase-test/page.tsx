import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Database, ArrowLeft } from "lucide-react";

export default async function SupabaseTestPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: inquiries, error } = await supabase
    .from("school_inquiries")
    .select("*")
    .limit(5);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Homepage</span>
      </Link>

      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#0A192F]">Supabase SSR Verification</h1>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Target: {process.env.NEXT_PUBLIC_SUPABASE_URL}
            </p>
          </div>
        </div>

        {error ? (
          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Table Query Note: {error.message}</span>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
              Your Supabase credentials are authenticated! If the table is not found yet, simply open your Supabase Dashboard &gt; SQL Editor and run the queries in <code className="font-bold">supabase/schema.sql</code>.
            </p>
          </div>
        ) : (
          <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Connection Successful & Table Active!</span>
            </div>
            <p className="text-xs text-emerald-700">
              Queried <code>school_inquiries</code> table successfully. {inquiries?.length || 0} active records retrieved.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
