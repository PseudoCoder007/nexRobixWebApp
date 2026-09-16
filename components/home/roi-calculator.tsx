"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { calculatePartnershipModel } from "@/lib/data/partnerships";
import { formatINR } from "@/lib/utils";
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Coins, 
  HelpCircle,
  Award
} from "lucide-react";

export function ROICalculator() {
  const [studentCount, setStudentCount] = useState<number>(1000);
  const [monthlyFee, setMonthlyFee] = useState<number>(250);

  const model = useMemo(() => {
    return calculatePartnershipModel(studentCount, monthlyFee);
  }, [studentCount, monthlyFee]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
            Transparent Financial Alignment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
            The School Partnership Money Model
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            See how your school recovers its lab setup capital expenditure in Year 1 while offering students individual hardware kits and dedicated resident engineering trainers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A192F]">Partnership Parameters</h3>
                <p className="text-xs text-slate-500">Adjust to match your institution</p>
              </div>
            </div>

            {/* Slider 1: Student Strength */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-800">Participating Students:</label>
                <span className="font-extrabold text-[#FF6B00] text-base px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-100">
                  {studentCount} Students
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="2000"
                step="50"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>300 (Single Section)</span>
                <span>1,000 (Base Case)</span>
                <span>2,000 (Large Campus)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Fee */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-slate-800">Student Monthly Fee:</label>
                <span className="font-extrabold text-[#0A192F] text-base px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                  ₹{monthlyFee} / month
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="400"
                step="25"
                value={monthlyFee}
                onChange={(e) => setMonthlyFee(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₹150/mo (~₹5/day)</span>
                <span>₹250/mo (~₹8/day)</span>
                <span>₹400/mo</span>
              </div>
              <p className="text-[11px] text-slate-500 italic mt-1">
                Note: Annual student fee of {formatINR(monthlyFee * 12)} covers personal take-home kits, 30 lab periods, and competition registrations.
              </p>
            </div>

            {/* Program Assumptions Breakdown */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Total Annual Collections:</span>
                <span className="font-bold text-slate-800">{formatINR(model.totalAnnualCollection)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Resident Trainers ({Math.max(1, Math.ceil(studentCount / 500))} Engineers):</span>
                <span>− {formatINR(model.trainerCost)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Individual Take-Home Kits:</span>
                <span>− {formatINR(model.kitsCost)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Lab Consumables Allowance:</span>
                <span>− {formatINR(model.maintenanceAllowance)}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-100">
                <span>Distributable Operating Surplus:</span>
                <span className="text-emerald-700">{formatINR(model.netOperatingSurplus)}</span>
              </div>
            </div>
          </div>

          {/* Output Results Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Projected Allocation Summary
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Annual Financial Return for Your School
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Surplus Splits Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {/* Year 1 Card */}
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-400 uppercase">Year 1 Share</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                      70% School Share
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {formatINR(model.schoolShareYear1)}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Designed to fully recover your physical lab setup capex (₹4L–₹7L) within the very first academic year.
                  </p>
                </div>

                {/* Year 2+ Card */}
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-400 uppercase">Year 2 Onward</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-300">
                      50 / 50 Equal Split
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {formatINR(model.schoolShareYear2)}
                    <span className="text-xs font-normal text-slate-400"> / year</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Consistent recurring surplus to school general accounts while NexRobix maintains trainers & upgrades.
                  </p>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Planning base model from NexRobix Master Blueprint 2026</span>
                </div>
                <Link
                  href="/book-audit"
                  className="inline-flex items-center gap-1.5 font-bold text-[#FF6B00] hover:text-orange-400 transition-colors"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                <strong className="block text-slate-900 mb-0.5">Parent Affordability</strong>
                ₹{monthlyFee} per month is ~₹8/day, easily absorbed into term fees.
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                <strong className="block text-slate-900 mb-0.5">Hands-On Ownership</strong>
                Each student receives individual hands-on kit components to retain.
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                <strong className="block text-slate-900 mb-0.5">No Hidden Fees</strong>
                Includes resident engineer salary, maintenance, and syllabus workbooks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
