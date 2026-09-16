"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    school_name: "",
    contact_person: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    board: "CBSE",
    student_count: "600",
    interested_solution: "Atal Tinkering Lab (ATL)",
    estimated_budget: "₹5L - ₹7L",
    message: "",
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
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error submitting inquiry";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200">
            <Mail className="w-3.5 h-3.5" />
            <span>School Relations & Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Connect with NexRobix
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are planning a new Atal Tinkering Lab, upgrading your science infrastructure, or evaluating our Resident Trainer model, our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF6B00]" />
                <span>Headquarters & Region</span>
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Registered Office:</strong>
                    <span>Patna, Bihar, India</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">General & Institutional Email:</strong>
                    <a href="mailto:nexrobix@gmail.com" className="text-[#0A192F] hover:underline font-medium">
                      nexrobix@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm">Active School Support Network</h4>
              <p>We actively coordinate on-site lab audits and resident engineer deployments across:</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-800">Bihar</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-800">Uttar Pradesh</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-800">West Bengal</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-800">Gujarat</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F]">Inquiry Successfully Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. A representative from our school partnership team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#FF6B00] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-[#0A192F] mb-4">Send a School Partnership Inquiry</h3>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">School Name *</label>
                    <input
                      type="text"
                      name="school_name"
                      required
                      placeholder="School name"
                      value={formData.school_name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      name="contact_person"
                      required
                      placeholder="Name"
                      value={formData.contact_person}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@school.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">State</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Solution of Interest</label>
                  <select
                    name="interested_solution"
                    value={formData.interested_solution}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                  >
                    <option>Atal Tinkering Lab (ATL) Setup</option>
                    <option>Composite Skill Lab (CSL) Tier</option>
                    <option>Resident Trainer Model Only</option>
                    <option>Curriculum & Kits Supply Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your school requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl text-xs font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
