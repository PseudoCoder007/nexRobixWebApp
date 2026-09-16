"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Sparkles, 
  Award, 
  Layers, 
  BookOpen, 
  Users, 
  Briefcase, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "ATL Lab Setup", href: "/atl-lab", badge: "NITI Aayog" },
    { name: "Composite Skill Lab", href: "/composite-skill-lab", badge: "CBSE 417" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Hardware & Kits", href: "/hardware-kits" },
    { name: "Resident Trainers", href: "/resident-trainers" },
    { name: "Partnership & ROI", href: "/partnership" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Accreditation & Alert Bar */}
      <div className="bg-[#0A192F] text-slate-200 py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FF6B00] text-white">
              NEP 2020
            </span>
            <span>
              Mandated CBSE Skill Labs & NITI Aayog Compliant Atal Tinkering Labs
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="mailto:nexrobix@gmail.com" 
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>nexrobix@gmail.com</span>
            </a>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Patna, Bihar & Pan-India</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 bg-slate-50 rounded-xl p-1 border border-slate-100 shadow-xs flex items-center justify-center">
              <Image
                src="/brand/final_logo.png"
                alt="NexRobix Technologies Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-[#0A192F] font-sans">
                  NEXROBIX
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                  STEAM & ATL
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase">
                Learn • Build • Innovate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#FF6B00] bg-orange-50/80 font-semibold"
                      : "text-slate-700 hover:text-[#0A192F] hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/partnership"
              className="text-xs font-semibold text-slate-700 hover:text-[#0A192F] px-3 py-2 transition-colors hidden xl:inline-block"
            >
              ROI Calculator
            </Link>
            <Link
              href="/book-audit"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-sm hover:shadow-md transition-all gap-2"
            >
              <span>Book a Lab Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#0A192F] hover:bg-slate-100 focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive
                      ? "text-[#FF6B00] bg-orange-50 font-semibold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/book-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#e05e00] shadow-xs text-center"
            >
              Book a Lab Audit & Consultation
            </Link>
            <div className="text-center pt-2">
              <span className="text-xs text-slate-500">Contact: </span>
              <a href="mailto:nexrobix@gmail.com" className="text-xs font-semibold text-slate-700 hover:underline">
                nexrobix@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
