import React from "react";
import Link from "next/link";
import { UserCheck, Shield, Award, CheckCircle, ArrowRight, Clock, BookOpen } from "lucide-react";

export function ResidentTrainerSection() {
  const highlights = [
    {
      title: "Full-Time Embedded on Campus",
      desc: "Not an occasional visiting vendor. A qualified NexRobix engineering graduate works exclusively on your timetable every week.",
      icon: Clock,
    },
    {
      title: "Rigorous 1-Month Engineering Bootcamp",
      desc: "Before stepping onto campus, every trainer completes certified training in pedagogy, classroom management, and hardware safety SOPs.",
      icon: Award,
    },
    {
      title: "Zero Burden on Existing Teachers",
      desc: "Your science and computer teachers do not need to retrain or take on extra periods. NexRobix owns session execution and grading.",
      icon: Shield,
    },
    {
      title: "Competition Mentoring & Exhibitions",
      desc: "The resident trainer prepares student teams for ATL Marathon, World Robot Olympiad (WRO), and leads the annual school STEAM Expo.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
              The NexRobix Human Advantage
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why School Labs Fail Without a Resident Engineer
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Across India, 78% of school tinkering labs sit underutilized because existing science and computer teachers lack practical robotics experience and have zero time between regular board exam syllabus requirements.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200">
              <strong className="text-amber-400 block mb-1">Our Structural Solution:</strong>
              NexRobix deploys a dedicated, full-time engineering graduate directly to your school. They conduct 30 structured annual periods, run troubleshooting, enforce machine safety, and mentor student inventors.
            </div>

            <div className="pt-2">
              <Link
                href="/resident-trainers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-[#0A192F] bg-white hover:bg-slate-100 transition-colors"
              >
                <span>Read Trainer Hiring & Safety Standards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-[#FF6B00] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{h.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{h.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Included in All School MoUs</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
