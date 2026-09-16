"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  Users, 
  CheckCircle2, 
  Layers, 
  Award,
  Sparkles
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Subtle Background Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(to right, #0A192F 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF6B00] text-xs font-semibold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>NITI Aayog ATL & CBSE Skill-13/2026 Ready</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] leading-[1.15]">
              Turn Your School into a Landmark{" "}
              <span className="text-[#FF6B00] underline decoration-amber-300/60 decoration-wavy underline-offset-4">
                STEAM & Innovation Hub
              </span>
            </h1>

            {/* Sub-headline with real authority */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              NexRobix delivers end-to-end <strong>Atal Tinkering Labs (ATL)</strong> and <strong>Composite Skill Labs</strong>. We combine state-of-the-art 3D printers, robotics, and aerospace kits with a <strong>full-time embedded engineer deployed on your campus</strong> to guarantee visible student outcomes.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">NITI Aayog Packages P1 to P4</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">CBSE Skill Codes 417 (AI) & 402</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">Full-Time Resident Engineer</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">70% Capex Payback in Year 1</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Link
                href="/book-audit"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm hover:shadow-md transition-all gap-2 group"
              >
                <span>Book On-Campus Lab Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/atl-lab"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0A192F] bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-2xs transition-all"
              >
                <span>Explore ATL Packages</span>
              </Link>
            </div>

            {/* Trust Quote / Footnote */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Compliant with ₹20 Lakh NITI Aayog Grant Lifecycle & School Operations</span>
            </div>
          </div>

          {/* Right Column: Institutional Feature Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#FF6B00] font-bold text-xs">
                    NR
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0A192F]">NexRobix Innovation Hub</h3>
                    <p className="text-[11px] text-slate-500">Standard 600 - 800 sq. ft. Lab Blueprint</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  NEP 2020 Validated
                </span>
              </div>

              {/* Lab Zones Stack */}
              <div className="mt-4 space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Zone 01: Robotics & IoT Lab</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Arduino, ESP32, 25+ sensor modules, line tracking, autonomous rovers.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Zone 02: Aerospace & Aeromodelling</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Guarded educational training drones, wind tunnel simulator, flight principles.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Zone 03: Rapid Prototyping & CNC</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Enclosed 3D printers, PLA filaments, desktop CNC PCB engraving, CAD stations.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Zone 04: Resident Engineering Desk</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Full-time NexRobix trainer managing 30 weekly sessions, safety, & WRO prep.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-[#FF6B00]" />
                  <span>3-Tier Physical Setup</span>
                </div>
                <Link 
                  href="/composite-skill-lab" 
                  className="font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
                >
                  View Tier Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
