import React from "react";
import Link from "next/link";
import { LAB_TIERS } from "@/lib/data/lab-tiers";
import { 
  Award, 
  Check, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Cpu,
  Sparkles 
} from "lucide-react";

export const metadata = {
  title: "Composite Skill Lab (CSL) Tiers: Ignite, Elevate & Pinnacle | NexRobix",
  description: "CBSE Circular Skill-13/2026 compliant Composite Skill Labs. Compare Ignite (₹4L-5L), Elevate (₹6L-7L), and Pinnacle (₹9L) turnkey lab tiers.",
};

export default function CompositeSkillLabPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
            <Award className="w-3.5 h-3.5" />
            <span>CBSE Circular Skill-13/2026 Mandate</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Composite Skill Labs (CSL) & AI Infrastructure
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            CBSE now requires affiliated schools to establish dedicated skill infrastructure by August 2027. NexRobix offers 3 structured physical tiers—<strong>Ignite, Elevate, and Pinnacle</strong>—designed to fit diverse school enrollment sizes and management budgets.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm transition-colors"
            >
              <span>Request Tier Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#0A192F] bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>Calculate Capex Payback (70/30)</span>
            </Link>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {LAB_TIERS.map((tier) => {
            const isPopular = tier.isPopular;
            return (
              <div 
                key={tier.id}
                id={tier.id}
                className={`relative rounded-2xl p-7 border flex flex-col justify-between transition-all ${
                  isPopular 
                    ? "bg-white border-[#FF6B00] shadow-xl ring-2 ring-orange-500/20" 
                    : "bg-slate-50/70 border-slate-200 shadow-xs hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#FF6B00] text-white uppercase tracking-wider shadow-sm">
                    Most Popular for CBSE Schools
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {tier.badge}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200/60 text-slate-700">
                      {tier.recommendedStudents}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#0A192F]">
                    {tier.name}
                  </h3>

                  <div className="mt-3 mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#FF6B00]">
                      {tier.priceEstimate}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Turnkey physical setup & hardware allocation
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="space-y-3 border-t border-slate-200/80 pt-5">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Specifications:
                    </h4>
                    {tier.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-slate-100 last:border-0">
                        <span className="text-slate-600">{spec.label}:</span>
                        <strong className="text-slate-900 text-right">{spec.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200/80">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Program Highlights:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {tier.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200">
                  <Link
                    href="/book-audit"
                    className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold transition-colors ${
                      isPopular
                        ? "bg-[#FF6B00] hover:bg-[#e05e00] text-white shadow-xs"
                        : "bg-[#0A192F] hover:bg-[#15274B] text-white"
                    }`}
                  >
                    <span>Select {tier.name.split(" ")[0]} Package</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Space Requirements Guidance */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
            <h3 className="text-lg font-bold text-[#0A192F]">
              Room & Infrastructure Requirements for Schools
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80">
              <strong className="text-slate-900 block mb-1 text-sm">Room Area</strong>
              Minimum 600 sq. ft. (or two 400 + 400 sq. ft. contiguous rooms) with adequate daylight and airflow.
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80">
              <strong className="text-slate-900 block mb-1 text-sm">Electrical Provision</strong>
              3-Phase connection recommended, minimum 3–5 kW sanctioned load, stabilized earthing for 3D printers and CNC.
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80">
              <strong className="text-slate-900 block mb-1 text-sm">Furniture & Fixtures</strong>
              School provides basic tables and seating; NexRobix provides ESD work surfaces, tool racks, and safety panels.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
