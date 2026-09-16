import React from "react";
import Link from "next/link";
import { 
  ClipboardCheck, 
  Wrench, 
  GraduationCap, 
  Trophy, 
  ArrowRight 
} from "lucide-react";

export function DeploymentJourney() {
  const steps = [
    {
      number: "01",
      title: "On-Campus Audit & 3D Blueprint",
      description: "Our engineering team inspects your allocated space (minimum 600 sq. ft.), audits electrical capacity, and generates a detailed 3D layout showing workbenches, equipment zones, and safety pathways.",
      icon: ClipboardCheck,
      timeframe: "Days 01 - 07",
    },
    {
      number: "02",
      title: "Turnkey Hardware & Branding Setup",
      description: "We install ESD-grounded benches, 3D printers, CNC carvers, robotics kits, safety gear, and inspirational STEAM wall branding. We conduct rigorous power and machine burn-in testing.",
      icon: Wrench,
      timeframe: "Days 08 - 21",
    },
    {
      number: "03",
      title: "Resident Engineer Deployment",
      description: "A certified NexRobix engineering graduate arrives on campus. We align with your academic timetable, integrate lab periods into the school routine, and orient faculty and administration.",
      icon: GraduationCap,
      timeframe: "Day 22 Onward",
    },
    {
      number: "04",
      title: "Curriculum Delivery & Annual Expo",
      description: "Weekly hands-on classes across grades, continuous project portfolios, entry submissions to the national ATL Marathon and WRO, culminating in a spectacular Annual School STEAM Exhibition.",
      icon: Trophy,
      timeframe: "Full Academic Year",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
            Hassle-Free Implementation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
            From Empty Room to Functioning Lab in 30 Days
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Our structured 4-step delivery lifecycle eliminates administrative friction so your school can launch on schedule.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200 font-mono group-hover:text-orange-200 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#0A192F] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-[#FF6B00] flex items-center gap-1">
                  <span>Step {step.number} Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Ready to assess your school&apos;s available lab space?
            </h4>
            <p className="text-xs text-slate-300">
              Our engineers conduct zero-obligation room audits across Bihar, UP, Kolkata, and Gujarat.
            </p>
          </div>
          <Link
            href="/book-audit"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-[#FF6B00] hover:bg-[#e05e00] text-white transition-colors"
          >
            <span>Book Space Audit & Survey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
