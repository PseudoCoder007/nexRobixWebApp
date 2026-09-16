"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  Plane, 
  Printer, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Eye 
} from "lucide-react";

export function ZonesShowcase() {
  const [activeZone, setActiveZone] = useState<number>(0);

  const zones = [
    {
      id: "robotics",
      title: "Robotics & Automation Zone",
      subtitle: "Autonomous rovers, servo mechanics & sensors",
      icon: Bot,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      description: "Equipped with modular multi-chassis rovers, Arduino Uno microcontrollers, high-torque servos, ultrasonic obstacle detectors, and line tracking arrays. Students learn physical automation from simple logic to PID closed-loop control.",
      equipment: [
        "15+ Modular robot chassis configurations",
        "Arduino Uno R4 WiFi / ATmega328P boards",
        "Dual L298N H-bridge motor driver packs",
        "25+ sensor discovery modules (IR, Sound, Distance, Tilt)"
      ],
      studentOutcome: "Builds autonomous obstacle-avoiding rovers and smart automated parking gates."
    },
    {
      id: "ai-iot",
      title: "AI & Embedded Computing Zone",
      subtitle: "CBSE Skill Code 417 practical development",
      icon: Cpu,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      description: "Dedicated to the CBSE AI mandate. Students interface ESP32 Wi-Fi microcontrollers and Raspberry Pi single-board computers with cameras to train machine learning models, analyze telemetry, and build smart campus IoT devices.",
      equipment: [
        "ESP32 NodeMCU dual-core IoT modules",
        "Raspberry Pi 4 (4GB) Linux development boards",
        "Edge AI camera vision sensors",
        "MQTT telemetry dashboards & cloud connectors"
      ],
      studentOutcome: "Deploys face-recognition attendance counters and cloud environmental telemetry."
    },
    {
      id: "aerospace",
      title: "Aerospace & Aeromodelling Zone",
      subtitle: "Flight dynamics, drones & wind tunnel simulator",
      icon: Plane,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      description: "Brings aeronautical concepts into school reality. Students investigate lift, drag, thrust, and airfoil profiles using our calibrated tabletop wind tunnel, assembled rocket scale models, and fly guarded educational quadcopters safely.",
      equipment: [
        "Educational aerodynamic test section wind tunnel",
        "Classroom-safe propeller-guarded training drones",
        "Turbojet scale cutaway motorized demonstrator",
        "Balsa wood & aerofoil flight model fabrication kits"
      ],
      studentOutcome: "Conducts wind tunnel aerodynamic tests and programs autonomous drone flight paths."
    },
    {
      id: "fabrication",
      title: "Digital Fabrication (3D & CNC) Zone",
      subtitle: "From CAD concept to physical production",
      icon: Printer,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "Replaces passive drawing with active manufacturing. Students design prototypes in Tinkercad or Fusion 360, slice them in Cura, and manufacture precision parts on enclosed 3D printers and safe desktop CNC routers.",
      equipment: [
        "Enclosed high-precision FDM desktop 3D printers",
        "Desktop enclosed 3-axis CNC router & PCB engraver",
        "Digital vernier calipers & precision metrology tools",
        "Biodegradable PLA / PLA+ engineering filaments"
      ],
      studentOutcome: "Designs and manufactures functional replacement parts and custom robotics chassis."
    },
  ];

  const current = zones[activeZone];
  const Icon = current.icon;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200">
            Inside the Laboratory
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-3 tracking-tight">
            Four Specialized Zones in One Unified Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Every NexRobix Lab is laid out into ergonomically organized work centers, ensuring safe multi-grade activities simultaneously without overcrowding or cross-interference.
          </p>
        </div>

        {/* Interactive Zone Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {zones.map((zone, idx) => {
            const TabIcon = zone.icon;
            const isSelected = activeZone === idx;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(idx)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0A192F] text-white border-[#0A192F] shadow-md ring-2 ring-orange-400/20"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100/80"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isSelected ? "bg-white/10 text-white" : "bg-white text-slate-700 shadow-2xs"
                }`}>
                  <TabIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight line-clamp-1">{zone.title.split(" ")[0]} {zone.title.split(" ")[1]}</h4>
                  <p className={`text-[10px] mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    Zone 0{idx + 1}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Detail Stage */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${current.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
                    Zone 0{activeZone + 1} Focus
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F]">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Core Hardware & Instrumentation:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.equipment.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Outcome Callout */}
              <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 text-xs sm:text-sm text-slate-800">
                <strong className="text-[#FF6B00] block mb-1">Measurable Student Output:</strong>
                {current.studentOutcome}
              </div>
            </div>

            {/* Visual Callout Blueprint Card */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Safety & Operations</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Trainer Supervised
                </span>
              </div>
              
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>ESD Grounded Workbenches:</strong> Heat & static resistant silicone surface protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Child-Safe Machine Enclosures:</strong> Fully enclosed 3D printing and emergency CNC cutoff interlocks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>PPE Safety Station:</strong> Eye shields, thermal soldering gloves, and first aid on site.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/book-audit"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-[#0A192F] hover:bg-[#15274B] transition-colors gap-2"
                >
                  <span>Request 3D Lab Layout for Your Room</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
