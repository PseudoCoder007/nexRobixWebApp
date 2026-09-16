export interface LabTier {
  id: string;
  name: string;
  badge: string;
  priceEstimate: string;
  priceNumber: number;
  bestFor: string;
  recommendedStudents: string;
  description: string;
  isPopular?: boolean;
  specs: {
    label: string;
    value: string;
  }[];
  keyHighlights: string[];
}

export const LAB_TIERS: LabTier[] = [
  {
    id: "ignite",
    name: "Ignite Foundation Lab",
    badge: "Essential Category",
    priceEstimate: "₹4,00,000 - ₹5,00,000",
    priceNumber: 400000,
    bestFor: "Schools establishing their first formal STEAM & Robotics environment under NEP 2020",
    recommendedStudents: "300 - 600 Students",
    description: "A high-impact foundation tier built around practical electronics, basic microcontrollers, algorithmic thinking, and primary 3D fabrication.",
    specs: [
      { label: "Robotics & Electronics Bench Sets", value: "10 Dedicated Sets" },
      { label: "Desktop 3D Printers (Enclosed)", value: "1 Precision Unit" },
      { label: "Educational Flight & Drone System", value: "1 Guarded Training Drone" },
      { label: "Aerospace Demonstration Models", value: "Basic Aircraft & Rocket Models" },
      { label: "Microcontroller Platforms", value: "Arduino Uno & Nano Kits" },
      { label: "Digital Fabrication (CNC)", value: "— (Software Simulation)" },
      { label: "Virtual Reality Headsets", value: "— (Mobile VR Modules)" },
      { label: "Resident Engineering Support", value: "Scheduled Trainer Deployment" }
    ],
    keyHighlights: [
      "Covers Grades 3 to 8 foundational curriculum",
      "CBSE Skill Code 402 (Information Technology) aligned",
      "Includes 10 complete student hands-on hardware kits",
      "Full room layout & branded wall decor blueprints",
      "Teacher enablement & safety certification"
    ]
  },
  {
    id: "elevate",
    name: "Elevate Advanced Lab",
    badge: "Most Popular",
    isPopular: true,
    priceEstimate: "₹6,00,000 - ₹7,00,000",
    priceNumber: 600000,
    bestFor: "Forward-thinking CBSE/ICSE institutions aiming for multi-technology leadership & competitions",
    recommendedStudents: "600 - 1,200 Students",
    description: "Expanded multi-domain innovation ecosystem integrating CNC digital fabrication, IoT cloud communication, immersive VR exploration, and quadcopter physics.",
    specs: [
      { label: "Robotics & Electronics Bench Sets", value: "15 Dedicated Sets" },
      { label: "Desktop 3D Printers (Enclosed)", value: "1 High-Speed Precision Unit" },
      { label: "Enclosed Desktop CNC Carver", value: "1 Unit (PCB & Wood Engraving)" },
      { label: "Educational Flight & Drone Systems", value: "2 Guarded Training Drones" },
      { label: "Virtual Reality (VR) Headsets", value: "2 Standalone VR Headsets" },
      { label: "Aerospace Demonstration Models", value: "Expanded Aeromodelling Kits" },
      { label: "Microcontroller Platforms", value: "Arduino + ESP32 IoT Boards" },
      { label: "Resident Engineering Support", value: "Dedicated Resident Trainer" }
    ],
    keyHighlights: [
      "Covers Grades 3 through 10 comprehensive curriculum",
      "Directly mapped to CBSE Skill Code 417 (Artificial Intelligence)",
      "Enclosed desktop CNC machine for practical subtractive machining",
      "2 standalone immersive VR headsets for abstract STEM visualisation",
      "Dedicated resident trainer embedded on campus",
      "ATL Marathon & regional science fair project mentoring"
    ]
  },
  {
    id: "pinnacle",
    name: "Pinnacle Flagship Lab",
    badge: "Flagship Excellence",
    priceEstimate: "₹8,50,000 - ₹9,00,000",
    priceNumber: 900000,
    bestFor: "Elite institutions wanting a landmark innovation centre that boosts admissions & national awards",
    recommendedStudents: "1,000+ Students",
    description: "NexRobix's most comprehensive school innovation centre. Features dual 3D printing stations, desktop CNC, 4 VR headsets, aeromodelling wind tunnel simulator, and AI computer vision workstations.",
    specs: [
      { label: "Robotics & Electronics Bench Sets", value: "20 Dedicated Sets" },
      { label: "Desktop 3D Printers (Enclosed)", value: "2 High-Speed Dual Units" },
      { label: "Enclosed Desktop CNC Carver", value: "1 Precision Multi-Material Unit" },
      { label: "Virtual Reality (VR) Headsets", value: "4 Standalone VR Headsets" },
      { label: "Educational Flight & Drone Systems", value: "3 Guarded Autonomous Drones" },
      { label: "Aerospace Research Models", value: "Wind Tunnel + Jet Engine Cutaway" },
      { label: "AI Vision & Edge Computing", value: "Raspberry Pi 4 + Coral AI Accelerators" },
      { label: "Resident Engineering Support", value: "Dedicated Full-Time Senior Trainer" }
    ],
    keyHighlights: [
      "Complete Grade 1 to Grade 12 + B.Tech continuity pipeline",
      "Aerospace research zone with aerodynamic wind tunnel & jet cutaway",
      "4 VR headsets for full immersive batch sessions",
      "Edge AI camera modules for computer vision & autonomous navigation",
      "Full-time resident engineer dedicated exclusively to the school",
      "Official World Robot Olympiad (WRO) & e-Yantra competition incubator"
    ]
  }
];
