import React from "react";
import Link from "next/link";
import { ATL_PACKAGES, GRANT_LIFECYCLE_STEPS } from "@/lib/data/atl-packages";
import { 
  ShieldCheck, 
  Cpu, 
  Boxes, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Coins, 
  Trophy,
  Download
} from "lucide-react";

export const metadata = {
  title: "Atal Tinkering Lab (ATL) Setup & NITI Aayog Packages P1-P4 | NexRobix",
  description: "Official turnkey Atal Tinkering Lab (ATL) setup adhering to NITI Aayog AIM specifications. Packages P1 to P4, ₹20 Lakh grant lifecycle utilization, and resident engineer support.",
};

export default function ATLLabPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu": return Cpu;
      case "Boxes": return Boxes;
      case "Wrench": return Wrench;
      default: return ShieldCheck;
    }
  };

  return (
    <div className="py-12 bg-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200">
            NITI Aayog • Atal Innovation Mission (AIM)
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Turnkey Atal Tinkering Lab (ATL) Setup & Modernization
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            NexRobix partners with schools to design, equip, and operate NITI Aayog compliant Atal Tinkering Labs. From Packages P1 to P4 procurement to full-time resident engineering trainers, we ensure your grant translates into national-level student innovation.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm transition-colors"
            >
              <span>Book ATL Grant & Lab Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#0A192F] bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>View Packages P1 - P4</span>
            </a>
          </div>
        </div>

        {/* 20 Lakh Grant Structure Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#0A192F] to-[#15274B] text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Grant Utilization Roadmap
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Optimizing the ₹20,00,000 NITI Aayog ATL Allocation
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-slate-200 border border-white/20">
              5-Year Continuous Model
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {GRANT_LIFECYCLE_STEPS.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-amber-400">{step.phase}</span>
                  <span className="text-sm font-extrabold text-white">{step.grantAmount}</span>
                </div>
                <h3 className="text-base font-bold text-white">{step.focus}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Official ATL Packages */}
        <div className="mt-20" id="packages">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
              NITI Aayog Standard Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
              Official ATL Equipment Packages (P1 to P4)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Every item supplied is tested, certified, and compliant with the technical specifications mandated by the Atal Innovation Mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ATL_PACKAGES.map((pkg) => {
              const Icon = getIcon(pkg.iconName);
              return (
                <div 
                  key={pkg.id} 
                  className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#FF6B00] uppercase font-mono">
                            {pkg.packageCode}
                          </span>
                          <h3 className="text-lg font-bold text-[#0A192F]">
                            {pkg.name}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700">
                        {pkg.allocationRange}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-4">
                      {pkg.summary}
                    </p>

                    <div className="space-y-2 mt-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Key Equipment & Components:
                      </span>
                      {pkg.items.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs flex justify-between items-start gap-2">
                          <div>
                            <strong className="text-slate-800 block">{item.name}</strong>
                            <span className="text-[11px] text-slate-500">{item.description}</span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 whitespace-nowrap">
                            {item.standardQty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{pkg.items.length} Component Categories</span>
                    <Link
                      href="/book-audit"
                      className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
                    >
                      <span>Request Full Quotation</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ATL Marathon & Competitions Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20">
              <Trophy className="w-3.5 h-3.5" />
              <span>National Innovation Pipeline</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Mentoring for the National ATL Marathon
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              An ATL lab is evaluated on student participation in national challenges. The NexRobix resident engineer guides student teams through problem identification, prototyping, testing, and submitting eligible projects to the annual NITI Aayog ATL Marathon.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#0A192F] bg-white hover:bg-slate-100 transition-colors shadow-md"
            >
              <span>Discuss Your School ATL Proposal</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
