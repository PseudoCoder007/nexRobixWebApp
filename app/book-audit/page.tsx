"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ClipboardCheck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Building, 
  Phone, 
  Mail,
  Sparkles
} from "lucide-react";

export default function BookAuditPage() {
  const [formData, setFormData] = useState({
    school_name: "",
    principal_or_director: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    board: "CBSE",
    available_space_sqft: "600 - 800 sq. ft.",
    existing_lab_status: "No existing lab (fresh setup)",
    preferred_date: "",
    specific_requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit audit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Zero-Obligation On-Campus Survey</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Schedule a Free School Lab & Space Audit
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our engineering team will visit your campus, evaluate your designated room dimensions and electrical layout, and deliver a tailored 3D CAD blueprint.
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 text-center shadow-lg space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#0A192F]">
              Audit Request Confirmed!
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong>{formData.principal_or_director}</strong>. We have received the lab audit request for <strong>{formData.school_name}</strong>. Our regional engineering head will contact you within 24 hours to confirm the survey schedule.
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0A192F] hover:bg-[#15274B] transition-colors"
              >
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Institution Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  1. Institution Particulars
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      School / Institution Name *
                    </label>
                    <input
                      type="text"
                      name="school_name"
                      required
                      placeholder="e.g. St. Xavier's International School"
                      value={formData.school_name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Principal / Director / Trustee Name *
                    </label>
                    <input
                      type="text"
                      name="principal_or_director"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.principal_or_director}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Official Contact Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="principal@school.edu.in"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Patna / Varanasi / Siliguri"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      placeholder="e.g. Bihar / Uttar Pradesh / West Bengal"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Lab & Space Scope */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  2. Laboratory Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Affiliation Board
                    </label>
                    <select
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] bg-white text-slate-900"
                    >
                      <option>CBSE</option>
                      <option>ICSE / ISC</option>
                      <option>State Board</option>
                      <option>Cambridge / IB</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Available Room Space (Approx)
                    </label>
                    <select
                      name="available_space_sqft"
                      value={formData.available_space_sqft}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] bg-white text-slate-900"
                    >
                      <option>600 - 800 sq. ft. (Standard)</option>
                      <option>400 + 400 sq. ft. (Dual contiguous)</option>
                      <option>800 - 1,200 sq. ft. (Flagship)</option>
                      <option>Space not yet finalized</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Lab Setup Status
                    </label>
                    <select
                      name="existing_lab_status"
                      value={formData.existing_lab_status}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] bg-white text-slate-900"
                    >
                      <option>No existing lab (fresh setup)</option>
                      <option>Have NITI Aayog ATL Grant (need procurement)</option>
                      <option>Upgrading existing outdated computer lab</option>
                      <option>Setting up CBSE Composite Skill Lab (CSL)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Survey Date (Optional)
                    </label>
                    <input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Notes / Target Grades / Questions
                  </label>
                  <textarea
                    name="specific_requirements"
                    rows={3}
                    placeholder="e.g. We want to focus on CBSE Code 417 AI for Grades 9-10 and need a full-time resident trainer on campus."
                    value={formData.specific_requirements}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Free Campus Audit • Zero Purchase Obligation</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Registering Survey..." : "Schedule Campus Audit"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
