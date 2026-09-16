import React from "react";
import { ShieldCheck, BookOpen, Award, CheckCircle } from "lucide-react";

export function ComplianceBar() {
  const credentials = [
    {
      title: "NITI Aayog AIM Guidelines",
      subtitle: "Packages P1, P2, P3 & P4 compliant",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "NEP 2020 §4.23 - 4.25 Mandate",
      subtitle: "Coding & AI for all Grades from Class 3+",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "CBSE Skill Codes 417 & 402",
      subtitle: "Mandatory curriculum alignment",
      icon: Award,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "WRO & e-Yantra Competition Track",
      subtitle: "Annual student competition incubation",
      icon: CheckCircle,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <div className="bg-white py-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div key={idx} className="flex items-center space-x-3 text-left">
                <div className={`w-10 h-10 rounded-xl ${cred.color} flex items-center justify-center flex-shrink-0 border border-slate-100 shadow-2xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A192F] leading-tight">
                    {cred.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {cred.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
