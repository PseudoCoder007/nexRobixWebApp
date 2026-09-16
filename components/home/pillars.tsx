import React from "react";
import Link from "next/link";
import { 
  Building2, 
  UserCheck, 
  GraduationCap, 
  Cpu, 
  Trophy, 
  ArrowRight 
} from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      step: "01",
      title: "Physical Lab & Infrastructure",
      description: "Custom space planning (600–800 sq. ft.), ESD-safe workbenches, 3D printers, CNC carvers, and safety apparatus engineered to international standards.",
      icon: Building2,
      href: "/composite-skill-lab",
      highlight: "Ignite, Elevate & Pinnacle Tiers"
    },
    {
      step: "02",
      title: "Resident Engineer Deployment",
      description: "We solve the #1 cause of lab abandonment: lack of trained instructors. A full-time engineering graduate is embedded at your school all year.",
      icon: UserCheck,
      href: "/resident-trainers",
      highlight: "Zero burden on school teachers"
    },
    {
      step: "03",
      title: "CBSE & NEP 2020 Curriculum",
      description: "30 structured annual periods per grade. Aligned to CBSE Skill Code 417 (AI) and Code 402 (IT), from Grade 1 foundational making to Class 12 capstones.",
      icon: GraduationCap,
      href: "/curriculum",
      highlight: "Grades 1 to 12 Progression"
    },
    {
      step: "04",
      title: "In-House Hardware & Kits",
      description: "15+ guided robot configurations per student level. Reusable microcontrollers, motor drivers, sensor arrays, and aero frames manufactured locally.",
      icon: Cpu,
      href: "/hardware-kits",
      highlight: "160+ catalogued items"
    },
    {
      step: "05",
      title: "Competitions & Exhibitions",
      description: "Annual Science & STEAM Exhibition support, school-wide demo days, student portfolios, and mentorship for ATL Marathon and WRO India.",
      icon: Trophy,
      href: "/curriculum#competitions",
      highlight: "Visible parent impact"
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
            Complete Delivery Framework
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
            More Than a Room Full of Boxes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Most vendors drop equipment boxes and disappear. NexRobix provides a complete 360-degree ecosystem that guarantees the lab is active, curriculum-driven, and generating pride for the school every single week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.step} 
                className="relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:border-slate-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black text-slate-400 font-mono tracking-wider">
                      {pillar.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF6B00] border border-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wide">
                    {pillar.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-[#0A192F] mt-1 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={pillar.href}
                    className="text-xs font-bold text-[#0A192F] group-hover:text-[#FF6B00] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Callout for School Partnership */}
          <div className="bg-[#0A192F] text-white rounded-2xl p-7 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-amber-400 font-mono uppercase tracking-wider">
                Financial Alignment
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2.5">
                The School Money Model
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                NexRobix aligns interests with school management through a transparent fee-sharing structure: <strong>70% surplus returned to the school in Year 1</strong> and 50/50 thereafter.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <Link
                href="/partnership"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FF6B00] hover:bg-[#e05e00] text-white transition-colors gap-1.5"
              >
                <span>Calculate Your School Surplus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
