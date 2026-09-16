import React from "react";
import Link from "next/link";
import { ROICalculator } from "@/components/home/roi-calculator";
import { PARTNERSHIP_BENEFITS } from "@/lib/data/partnerships";
import { 
  Coins, 
  ShieldCheck, 
  TrendingUp, 
  HelpCircle, 
  ArrowRight,
  CheckCircle2 
} from "lucide-react";

export const metadata = {
  title: "School Partnership Money Model & ROI | NexRobix",
  description: "Transparent school partnership economics. Discover how your institution recovers lab capex with a 70% Year 1 surplus share.",
};

export default function PartnershipPage() {
  const faqs = [
    {
      q: "How does the school recover its setup investment?",
      a: "In Year 1, the school receives 70% of the net distributable surplus from the annual student STEM fee collections. For a school with 1,000 students, this equates to approximately ₹7.70 Lakhs in Year 1, fully covering the initial setup capex of the lab."
    },
    {
      q: "What is included in the ₹250/month student fee?",
      a: "The fee is all-inclusive: personal take-home hardware kits, 30 guided periods per year, full-time resident engineer salary, software licenses, lab consumables, and participation in annual exhibitions."
    },
    {
      q: "What are the school's ongoing maintenance obligations?",
      a: "None. NexRobix takes operational responsibility for preventive maintenance, component replacements, tool servicing, and resident trainer management."
    },
    {
      q: "What is the recommended partnership duration?",
      a: "We recommend a standard 3-year Memorandum of Understanding (MoU) with an annual academic performance review to ensure continuous quality."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Coins className="w-3.5 h-3.5" />
            <span>Shared Value Model</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            The School Partnership Money Model
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Unlike conventional vendors who treat school lab setups as one-off equipment sales, NexRobix is an academic and financial partner. We structure our model so the school retains the majority of the surplus to recover capex in Year 1.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERSHIP_BENEFITS.map((benefit, i) => (
            <div key={i} className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Strategic Advantage 0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A192F]">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Calculator Section */}
        <div className="mt-14">
          <ROICalculator />
        </div>

        {/* FAQs for Trustees & School Directors */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
              Governance & Due Diligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mt-3">
              Frequently Asked Questions by School Trustees
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-[#0A192F] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Want a customized financial proposal for your board meeting?</h3>
            <p className="text-xs text-slate-300 mt-1">We can generate an institution-specific Money Model brief based on your exact student enrollment.</p>
          </div>
          <Link
            href="/book-audit"
            className="flex-shrink-0 px-6 py-3 rounded-xl text-xs font-bold bg-[#FF6B00] hover:bg-[#e05e00] text-white transition-colors"
          >
            Request Board Brief
          </Link>
        </div>
      </div>
    </div>
  );
}
