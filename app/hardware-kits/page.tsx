"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { EQUIPMENT_CATALOGUE, EquipmentProduct } from "@/lib/data/equipment";
import { 
  Search, 
  Cpu, 
  SlidersHorizontal, 
  ArrowRight, 
  Boxes, 
  CheckCircle2, 
  Download 
} from "lucide-react";

export default function HardwareKitsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Robotics & Controllers",
    "Sensors & Modules",
    "Digital Fabrication",
    "Aerospace & Drones",
    "Tools & Power"
  ];

  const filteredItems = useMemo(() => {
    return EQUIPMENT_CATALOGUE.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial & Educational Grade</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Hardware Kits & Lab Equipment Pool
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our hardware is designed for repetitive, hands-on student assembly. Rather than cheap plastic toys, we supply anodized chassis, industry-standard microcontrollers, precision sensors, and enclosed fabrication machines.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment (e.g. Arduino, 3D Printer, Drone, Sensor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-slate-900"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0A192F] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0A192F] mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-700 font-mono mb-4">
                  <span className="font-semibold text-slate-500 block mb-0.5 font-sans">Specifications:</span>
                  {item.specs}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-orange-50 text-[#FF6B00] border border-orange-100 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/book-audit"
                    className="text-xs font-bold text-[#0A192F] hover:text-[#FF6B00] flex items-center justify-between"
                  >
                    <span>Request Lab Allocation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 mt-8">
            <p className="text-sm font-semibold text-slate-600">No equipment found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-3 text-xs font-bold text-[#FF6B00] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
