import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Award, 
  Users, 
  ShieldCheck, 
  Target, 
  Lightbulb, 
  ArrowRight 
} from "lucide-react";

export const metadata = {
  title: "About NexRobix | STEAM & ATL Laboratory Innovators",
  description: "Learn about NexRobix Technology Private Limited, our mission, leadership team, and vision to make Indian students creators of future technology.",
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Aditya Kaushik",
      role: "Chief Executive Officer & Strategy",
      focus: "School Partnerships, Strategic MoUs, Institution Relations & Expansion",
    },
    {
      name: "Abhishek Raj",
      role: "Technical Head & Curriculum Architecture",
      focus: "CBSE NEP 2020 Coursework, AI Vision Engineering & Embedded Systems",
    },
    {
      name: "Mohd Saif",
      role: "Operations & Trainer Management",
      focus: "Resident Engineer Deployment, Trainer Bootcamp & Lab Safety SOPs",
    },
    {
      name: "Yadav Ashvin Shambhunath",
      role: "Hardware & Manufacturing Head",
      focus: "Local Hardware Fabrication, 3D/CNC Sourcing & Component Quality Control",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Identity & Vision</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Building the Next Generation of Indian Innovators
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            NexRobix Technology Private Limited was founded on a simple, non-negotiable principle: <strong>students should not merely consume technology—they should learn to build, automate, and commercialize it.</strong>
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To transform schools across Tier-1, Tier-2, and Tier-3 cities in India into self-sustaining innovation incubators where students solve real-world agricultural, aerospace, healthcare, and industrial challenges through robotics and artificial intelligence.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F]">Our Delivery Promise</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never drop unmanaged boxes. Every NexRobix laboratory is paired with a fully certified resident engineer, 30 annual structured periods, personal take-home kits, and direct mentorship for national innovation awards.
            </p>
          </div>
        </div>

        {/* Company Facts */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0A192F] to-[#15274B] text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl font-extrabold text-[#FF6B00]">2027</span>
              <p className="text-xs text-slate-300 mt-1">Anchor Launch Plan</p>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white">4</span>
              <p className="text-xs text-slate-300 mt-1">Phase 1 States (Bihar, UP, WB, GJ)</p>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-amber-400">100%</span>
              <p className="text-xs text-slate-300 mt-1">Full-Time Resident Trainers</p>
            </div>
            <div>
              <span className="text-3xl font-extrabold text-emerald-400">P1 - P4</span>
              <p className="text-xs text-slate-300 mt-1">NITI Aayog Certified Packages</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
              Founding Team & Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mt-3">
              Leadership Committed to Educational Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 mx-auto flex items-center justify-center text-xl font-extrabold text-[#0A192F] shadow-xs">
                  {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A192F]">{member.name}</h3>
                  <span className="text-xs font-semibold text-[#FF6B00] block mt-0.5">{member.role}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Incubation Alignment */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <div>
              <strong className="text-sm text-slate-900 block">Incubation & Startup Ecosystem Pipeline</strong>
              <p className="text-xs text-slate-600">Originating in Patna, Bihar, aligned with state incubator frameworks and academic institutions.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 text-xs font-bold text-[#FF6B00] hover:underline"
          >
            Contact Company Centre →
          </Link>
        </div>
      </div>
    </div>
  );
}
