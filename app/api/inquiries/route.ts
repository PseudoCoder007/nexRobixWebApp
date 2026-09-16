import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Required fields check
    if (!data.school_name || !data.contact_person || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Please provide all required contact details." },
        { status: 400 }
      );
    }

    if (isSupabaseConfigured) {
      const { error } = await supabase.from("school_inquiries").insert([
        {
          school_name: data.school_name,
          contact_person: data.contact_person,
          designation: data.designation || null,
          email: data.email,
          phone: data.phone,
          city: data.city || "Not provided",
          state: data.state || "Not provided",
          board: data.board || "CBSE",
          student_count: data.student_count ? parseInt(data.student_count) : null,
          interested_solution: data.interested_solution || "ATL Lab Setup",
          estimated_budget: data.estimated_budget || null,
          message: data.message || null,
          status: "new",
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    } else {
      // Graceful fallback for local development before Supabase keys are configured
      console.log("Inquiry received (Supabase pending config):", data);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been registered successfully. Our school director will contact you within 24 hours.",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
