import React from "react";
import Link from "next/link";
import { CURRICULUM_STAGES, ANNUAL_SESSION_STRUCTURE } from "@/lib/data/curriculum";
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight, 
  Sparkles,
  Trophy 
} from "lucide-react";

export const metadata = {
  title: "K-12 STEM, Robotics & AI Curriculum | NexRobix",
  description: "CBSE Skill Code 417 (Artificial Intelligence) and Code 402 (IT) aligned 30-session curriculum from Grade 1 foundational making to Class 12 engineering capstones.",
};

export default function CurriculumPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>NEP 2020 Pedagogical Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Grade-Wise K-12 Progressive Curriculum
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Students shouldn&apos;t just consume technology—they should learn to build it. Our 30-session annual curriculum connects hands-on mechanical building, microcontroller coding, Python AI vision, and aerospace flight principles with tangible student portfolios.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm transition-colors"
            >
              <span>Request Curriculum Syllabus Copy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Curriculum Stages */}
        <div className="mt-14 space-y-8">
          {CURRICULUM_STAGES.map((stage, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider font-mono">
                      {stage.gradeBand}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F]">
                      {stage.stageName}: {stage.theme}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    {stage.cbseAlignment}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {stage.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Core Topics */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#FF6B00]" />
                    <span>Core Learning Modules:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {stage.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FF6B00] font-bold">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Student Artifacts */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2.5">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Tangible Artifacts Students Produce:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {stage.studentArtifacts.map((art, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{art}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 30 Session Yearly Breakdown */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
              Academic Calendar Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
              A Planned 30-Period Annual Structure
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Smoothly integrated into the school timetable (1 period/week per section) without disrupting core exam subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ANNUAL_SESSION_STRUCTURE.map((term, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#FF6B00] uppercase font-mono">
                  {term.sessions}
                </span>
                <h3 className="text-sm font-bold text-[#0A192F]">{term.phase}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{term.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Track */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0A192F] text-white flex flex-col md:flex-row items-center justify-between gap-6" id="competitions">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <Trophy className="w-4 h-4" />
              <span>National & Global Contests</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Incubating Teams for WRO India & e-Yantra (IIT Bombay)
            </h3>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              We mentor school teams to compete in the World Robot Olympiad (WRO) Future Innovators track and guide senior students toward college-level robotics competitions.
            </p>
          </div>
          <Link
            href="/book-audit"
            className="flex-shrink-0 px-5 py-3 rounded-xl text-xs font-bold bg-[#FF6B00] hover:bg-[#e05e00] text-white transition-colors"
          >
            Inquire About Competition Training
          </Link>
        </div>
      </div>
    </div>
  );
}
