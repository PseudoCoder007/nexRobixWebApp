import React from "react";
import { Hero } from "@/components/home/hero";
import { ComplianceBar } from "@/components/home/compliance-bar";
import { PillarsSection } from "@/components/home/pillars";
import { ZonesShowcase } from "@/components/home/zones-showcase";
import { ResidentTrainerSection } from "@/components/home/resident-trainer-section";
import { ROICalculator } from "@/components/home/roi-calculator";
import { ComparisonSection } from "@/components/home/comparison-table";
import { DeploymentJourney } from "@/components/home/deployment-journey";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Phone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "NexRobix | Turnkey STEAM & Atal Tinkering Lab (ATL) Setup for Schools",
  description: "Premier school innovation partner providing NITI Aayog compliant Atal Tinkering Labs (ATL), Composite Skill Labs (CSL), CBSE Skill Code 417 AI curriculum, hardware kits, and full-time resident engineers.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. High-Impact Institutional Hero */}
      <Hero />

      {/* 2. Regulatory & Compliance Accreditation Bar */}
      <ComplianceBar />

      {/* 3. The 5 Pillars of NexRobix Ecosystem */}
      <PillarsSection />

      {/* 4. Interactive 4-Zone Lab Showcase */}
      <ZonesShowcase />

      {/* 5. The Gamechanger: Full-Time Resident Embedded Engineer */}
      <ResidentTrainerSection />

      {/* 6. Interactive School ROI & Partnership Money Model Calculator */}
      <ROICalculator />

      {/* 7. Institutional Comparison: Conventional Vendor vs. NexRobix */}
      <ComparisonSection />

      {/* 8. The 4-Step 30-Day Deployment Journey */}
      <DeploymentJourney />

      {/* 9. Final Institutional Call-to-Action Section */}
      <section className="py-16 sm:py-24 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
            Academic Year 2026 - 2027 Onboarding
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Equip Your Students to Become{" "}
            <span className="text-[#FF6B00]">Creators of Future Technology</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a zero-obligation on-campus audit with our senior engineering team. We will inspect your room, review electrical requirements, and deliver a tailored 3D spatial layout and CBSE curriculum roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/book-audit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-lg hover:shadow-orange-500/20 transition-all gap-2 group"
            >
              <span>Schedule Free Campus Lab Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/atl-lab"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
            >
              <span>View NITI Aayog ATL Packages</span>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Zero Obligation Space Survey
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              CBSE Skill-13/2026 Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Support: nexrobix@gmail.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
