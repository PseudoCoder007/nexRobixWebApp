import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  Mail, 
  MapPin, 
  FileText, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
      {/* Upper Highlight Strip */}
      <div className="border-b border-slate-800/80 py-10 bg-[#071324]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-[#FF6B00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">NITI Aayog Compliant</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Full alignment with Atal Innovation Mission (AIM) equipment packages P1 through P4.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">CBSE Circular Skill-13</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Mapped to CBSE Skill Codes 417 (AI) and 402 (IT) for mandatory school compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Resident Engineer Model</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Full-time embedded engineering trainer deployed directly on your school campus.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Fair Revenue Share</h4>
                <p className="text-xs text-slate-400 mt-1">
                  70% surplus returned to the school in Year 1 to fully recover capital expenditure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                <Image
                  src="/brand/final_logo.png"
                  alt="NexRobix Technologies"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                NEXROBIX
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              NexRobix Technology Private Limited is a specialized school innovation partner enabling K-12 institutions to establish turnkey Atal Tinkering Labs (ATL) and Composite Skill Labs with end-to-end curriculum, hardware kits, and resident trainers.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <span>Patna, Bihar, India (Operating in Bihar, UP, Kolkata, Gujarat)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <a href="mailto:nexrobix@gmail.com" className="hover:text-white transition-colors">
                  nexrobix@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Lab Solutions
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/atl-lab" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Atal Tinkering Lab (ATL)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/composite-skill-lab" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Composite Skill Lab (CSL)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/composite-skill-lab#ignite" className="hover:text-white transition-colors">
                  Ignite Foundation Lab (₹4L-5L)
                </Link>
              </li>
              <li>
                <Link href="/composite-skill-lab#elevate" className="hover:text-white transition-colors">
                  Elevate Advanced Lab (₹6L-7L)
                </Link>
              </li>
              <li>
                <Link href="/composite-skill-lab#pinnacle" className="hover:text-white transition-colors">
                  Pinnacle Flagship Lab (₹9L)
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic & Operations */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Academics & Models
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors">
                  K-12 Progressive Curriculum
                </Link>
              </li>
              <li>
                <Link href="/curriculum#cbse" className="hover:text-white transition-colors">
                  CBSE Code 417 & 402 Mapping
                </Link>
              </li>
              <li>
                <Link href="/resident-trainers" className="hover:text-white transition-colors">
                  Resident Engineer Model
                </Link>
              </li>
              <li>
                <Link href="/hardware-kits" className="hover:text-white transition-colors">
                  Hands-On Hardware Kits
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-white transition-colors">
                  The School Money Model (ROI)
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & Contact */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Get Started
            </h5>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Request a zero-obligation on-campus audit of your designated lab room and get a customized 3D spatial layout.
            </p>
            <Link
              href="/book-audit"
              className="inline-block w-full py-2.5 px-3 rounded-lg text-center text-xs font-semibold text-white bg-[#FF6B00] hover:bg-[#e05e00] transition-colors"
            >
              Book School Audit
            </Link>
            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
              <p>Motto: <span className="text-slate-300 font-medium">Learn • Build • Innovate</span></p>
              <p className="mt-1">Startup Ecosystem: Bihar Startup Fund Pipeline</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500 bg-[#050e1b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} NexRobix Technology Private Limited. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>NEP 2020 Aligned</span>
            <span>•</span>
            <span>NITI Aayog AIM Guidelines</span>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About NexRobix
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
