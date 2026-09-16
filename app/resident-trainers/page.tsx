import React from "react";
import Link from "next/link";
import { 
  UserCheck, 
  ShieldCheck, 
  Award, 
  Clock, 
  BookOpen, 
  Wrench, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

export const metadata = {
  title: "Resident Engineer Model | Full-Time Embedded Trainers | NexRobix",
  description: "Learn how NexRobix solves the school lab teacher bottleneck by embedding full-time qualified engineering trainers directly on your campus.",
};

export default function ResidentTrainersPage() {
  const trainerResponsibilities = [
    {
      title: "Direct Classroom Instruction",
      desc: "Delivers 30 structured hands-on sessions per grade across primary, middle, and secondary sections.",
    },
    {
      title: "Lab Machine Maintenance & Safety",
      desc: "Performs weekly calibration of 3D printers, CNC carvers, soldering stations, and enforces ESD safety rules.",
    },
    {
      title: "Student Inventory & Kit Management",
      desc: "Distributes and tracks individual student hardware components, manages spares, and prevents component loss.",
    },
    {
      title: "National Competition Mentoring",
      desc: "Conducts after-school ideation clinics for ATL Marathon, World Robot Olympiad (WRO), and regional hackathons.",
    },
    {
      title: "School Exhibition Leadership",
      desc: "Designs and coordinates the Annual School STEAM Expo, curating student prototype demonstrations for parents and trustees.",
    },
    {
      title: "Zero Teacher Burden Guarantee",
      desc: "Requires no extra teaching periods or lesson preparation from your regular science and computer faculty.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Dedicated Manpower Deployment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            The Full-Time Resident Engineer Model
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            School laboratories do not fail because of equipment—they fail because of human bandwidth. NexRobix deploys qualified, certified engineering graduates who work full-time on your campus timetable to guarantee active, productive learning every week.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm transition-colors"
            >
              <span>Request School Trainer Deployment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* The Teacher Bottleneck Problem & Solution */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-rose-50/70 border border-rose-200 text-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>The Industry Reality</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Why Box-Dropper Labs Gather Dust</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When vendors simply drop kits and provide a 2-day teacher workshop, existing science and computer teachers quickly get overwhelmed. They have board exam syllabi to complete and are not trained in firmware debugging, 3D printer calibration, or CNC g-code. Within 3 months, the lab keys are locked in a drawer.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>The NexRobix Embedded Solution</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">An Embedded Engineer in Your Staffroom</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              NexRobix recruits, certifies, and embeds full-time B.Tech/Diploma engineering graduates directly into partner schools. They become an integral part of your campus timetable, managing hardware, troubleshooting projects, and conducting practical demonstrations seamlessly.
            </p>
          </div>
        </div>

        {/* Rigorous 1-Month Bootcamp */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0A192F] text-white">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Quality & Training Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 1-Month Pre-Deployment Engineering Bootcamp
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Before stepping onto any school campus, all NexRobix trainers undergo an intensive 4-week training curriculum covering:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-amber-400 font-bold">Week 1:</span>
                <span>Pedagogy, K-12 Child Psychology & Classroom Engagement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-amber-400 font-bold">Week 2:</span>
                <span>Hardware Maintenance, 3D Printer Bed Leveling & CNC Safety</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-amber-400 font-bold">Week 3:</span>
                <span>CBSE Skill Codes 417 & 402 Practical Deliverables</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-amber-400 font-bold">Week 4:</span>
                <span>Mock Classroom Audits, ESD Standards & First Aid SOPs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities Grid */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
              Accountability Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
              Scope of the Resident Engineer on Your Campus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainerResponsibilities.map((resp, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-[#0A192F]">{resp.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{resp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
