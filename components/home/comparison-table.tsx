import React from "react";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  const comparisonItems = [
    {
      factor: "Core Offering",
      conventional: "Equipment supply only (boxes dropped in a room)",
      nexrobix: "Complete 360° ecosystem (infrastructure, trainer, curriculum, kits)",
    },
    {
      factor: "Instruction & Teaching",
      conventional: "Leaves burden on untrained science/computer teachers",
      nexrobix: "Full-time qualified Resident Engineer embedded on campus",
    },
    {
      factor: "Curriculum Alignment",
      conventional: "Disconnected PDFs or generic kit manuals",
      nexrobix: "Structured 30-session plan mapped to CBSE Skill Codes 417 & 402",
    },
    {
      factor: "Technology Breadth",
      conventional: "Basic plastic robotics blocks only",
      nexrobix: "Robotics, AI Vision, Drones, Wind Tunnel, VR & Enclosed 3D/CNC",
    },
    {
      factor: "Student Tangibles",
      conventional: "Shared group kits disassembled after class",
      nexrobix: "Individual age-appropriate hardware kits students keep",
    },
    {
      factor: "Visible Proof of Impact",
      conventional: "Periodic certificate without working builds",
      nexrobix: "Annual School STEAM Expo, WRO prep & live student portfolios",
    },
    {
      factor: "School Financial Return",
      conventional: "100% sunk cost with recurring maintenance invoices",
      nexrobix: "70% surplus returned to school in Year 1 to fully recover capex",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
            Clear Decision Factors
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
            Why Schools Switch to NexRobix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            See how the NexRobix institutional partnership compares with standard lab equipment vendors.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                  Evaluation Dimension
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-3/8 bg-slate-100/60">
                  Conventional Lab Vendor
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-white w-3/8 bg-[#0A192F]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF6B00]">★</span>
                    <span>The NexRobix Approach</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0A192F]">
                    {item.factor}
                  </td>
                  <td className="py-4 px-6 text-slate-600 bg-slate-50/30">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{item.conventional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-medium bg-orange-50/20">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[#0A192F]">{item.nexrobix}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
