import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.school_name || !data.principal_or_director || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Please provide school name, contact person, email, and phone number." },
        { status: 400 }
      );
    }

    if (isSupabaseConfigured) {
      const { error } = await supabase.from("lab_audit_requests").insert([
        {
          school_name: data.school_name,
          principal_or_director: data.principal_or_director,
          email: data.email,
          phone: data.phone,
          city: data.city || "Not provided",
          state: data.state || "Not provided",
          board: data.board || "CBSE",
          available_space_sqft: data.available_space_sqft || null,
          existing_lab_status: data.existing_lab_status || "No Existing Lab",
          preferred_date: data.preferred_date || null,
          specific_requirements: data.specific_requirements || null,
          status: "pending_review",
        },
      ]);

      if (error) {
        console.error("Supabase audit insert error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    } else {
      console.log("Lab audit request received (Supabase pending config):", data);
    }

    return NextResponse.json({
      success: true,
      message: "Lab audit request submitted. Our field engineering team will coordinate the site survey date.",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
