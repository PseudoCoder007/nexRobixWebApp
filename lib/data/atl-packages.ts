export interface ATLEquipmentItem {
  name: string;
  category: string;
  description: string;
  standardQty: string;
}

export interface ATLPackage {
  id: string;
  packageCode: string;
  name: string;
  subtitle: string;
  summary: string;
  allocationRange: string;
  iconName: string;
  items: ATLEquipmentItem[];
}

export const ATL_PACKAGES: ATLPackage[] = [
  {
    id: "package-1",
    packageCode: "Package P1",
    name: "Electronics, Robotics, IoT & Sensors",
    subtitle: "Computational Thinking & Physical Computing",
    summary: "Comprehensive microcontrollers, development boards, sensor arrays, actuator modules, and educational robotics kits compliant with NITI Aayog guidelines.",
    allocationRange: "₹3,50,000 - ₹4,50,000",
    iconName: "Cpu",
    items: [
      { name: "Arduino Uno R3 / R4 Compatible Boards with USB Cable", category: "Microcontrollers", description: "Primary microcontroller platform for block & C++ based robotics learning", standardQty: "15 Sets" },
      { name: "ESP32 Wi-Fi + Bluetooth IoT Development Boards", category: "IoT & Cloud", description: "Dual-core processor with native Wi-Fi/BLE for smart home and IoT projects", standardQty: "10 Sets" },
      { name: "Raspberry Pi 4 Model B (4GB / 8GB) Starter Hub", category: "Edge Computing", description: "Single-board Linux computer for computer vision and Python AI development", standardQty: "2 Units" },
      { name: "All-in-One Sensor Array Module (25+ Sensors)", category: "Sensors", description: "Ultrasonic, PIR motion, DHT11 temp/humidity, IR obstacle, sound, gas, LDR, soil moisture", standardQty: "15 Kits" },
      { name: "Actuator & Motor Control Pack", category: "Actuators", description: "Dual L298N motor drivers, micro servos (SG90), high-torque metal gear servos (MG996R), DC geared motors", standardQty: "30 Units" },
      { name: "Programmable Smart Robot Rover Kits", category: "Robotics", description: "Multi-chassis obstacle avoidance, line tracking, edge detecting modular rover", standardQty: "8 Kits" },
      { name: "OLED Displays (0.96 inch I2C) & 16x2 LCD Modules", category: "Displays", description: "Alphanumeric and graphical display units for sensor readout & interactive dashboards", standardQty: "15 Units" },
      { name: "Breadboards, Jumper Wires & Passive Component Bundles", category: "Prototyping", description: "Solderless 830-point breadboards, DuPont jumper cables (M-M, M-F, F-F), resistor/capacitor assortments", standardQty: "30 Sets" }
    ]
  },
  {
    id: "package-2",
    packageCode: "Package P2",
    name: "Rapid Prototyping & Digital Fabrication",
    subtitle: "From CAD Model to Physical Creation",
    summary: "Industrial-grade desktop FDM 3D printers, precision 3D design workstations, enclosed materials, and slicing software for additive manufacturing.",
    allocationRange: "₹2,50,000 - ₹3,50,000",
    iconName: "Boxes",
    items: [
      { name: "Dual-Extrusion / High-Speed Desktop 3D Printer (Enclosed)", category: "Additive Manufacturing", description: "Auto-bed leveling, PEI sheet, HEPA air filtration, compatible with PLA/PETG/ABS filaments", standardQty: "2 Units" },
      { name: "Premium PLA / PLA+ Filament Spools (Multi-Color)", category: "Consumables", description: "1.75mm biodegradable PLA filament assortment for student design projects", standardQty: "12 kg" },
      { name: "Precision Digital Vernier Calipers & Micrometer Sets", category: "Metrology", description: "Stainless steel digital calipers for engineering tolerances and CAD reverse engineering", standardQty: "5 Units" },
      { name: "3D Pen Kits with Heat-Safe Silicone Mats", category: "Creative Prototyping", description: "Ergonomic 3D pens with low-temperature PCL filaments for junior grade conceptual building", standardQty: "6 Sets" },
      { name: "Slicing & CAD Software Suite Access", category: "Software", description: "Autodesk Tinkercad, Fusion 360 Education, and Ultimaker Cura configuration profiles", standardQty: "Lab License" }
    ]
  },
  {
    id: "package-3",
    packageCode: "Package P3",
    name: "Mechanical, Carpentry & Power Tools",
    subtitle: "Hands-on Engineering & Material Transformation",
    summary: "Safety-tested mechanical tooling, drilling, fastening, cutting, and shaping equipment suited for secondary and higher-secondary tinkering.",
    allocationRange: "₹1,50,000 - ₹2,00,000",
    iconName: "Wrench",
    items: [
      { name: "Rotary Multi-Tool Workstation with Flexible Shaft", category: "Power Tools", description: "Variable speed precision rotary tool with 150+ grinding, cutting, and polishing attachments", standardQty: "2 Sets" },
      { name: "Variable Speed Bench Pillar Drill Machine", category: "Machine Tools", description: "Cast iron base, emergency stop, depth gauge, keyed chuck for clean PCB and chassis drilling", standardQty: "1 Unit" },
      { name: "Precision Temperature-Controlled Soldering Stations", category: "Electronics Tooling", description: "ESD-safe digital stations, brass tip cleaners, lead-free solder wire, desoldering pumps", standardQty: "4 Stations" },
      { name: "Heavy-Duty Bench Vices & Clamping Sets", category: "Fixtures", description: "360-degree swivel base cast steel table vices for secure workpiece stabilization", standardQty: "4 Units" },
      { name: "Precision Hand Tool Kit (Pliers, Cutters, Screwdrivers)", category: "Hand Tools", description: "Ergonomic wire strippers, diagonal side cutters, magnetic precision multi-bit screwdrivers", standardQty: "10 Sets" },
      { name: "Hot Glue Guns & High-Tack Adhesive Cartridges", category: "Fastening", description: "Industrial trigger-feed glue guns for quick mechanical mockups and structural prototypes", standardQty: "6 Units" }
    ]
  },
  {
    id: "package-4",
    packageCode: "Package P4",
    name: "Power Supply, Safety & Lab Measurement",
    subtitle: "Laboratory Safety, Power Regulation & Testing",
    summary: "Regulated linear DC power supplies, digital multimeters, ESD-safe lab gear, certified fire extinguishers, and emergency safety apparatus.",
    allocationRange: "₹1,50,000 - ₹2,00,000",
    iconName: "ShieldCheck",
    items: [
      { name: "Dual-Channel Regulated Variable DC Power Supplies (0-30V, 0-5A)", category: "Power Instrumentation", description: "Overvoltage & short-circuit protection, digital LED display for testing circuits and motors", standardQty: "3 Units" },
      { name: "True-RMS Auto-Ranging Digital Multimeters", category: "Measurement", description: "Audible continuity, frequency, capacitance, voltage and current testing with safety leads", standardQty: "6 Units" },
      { name: "Anti-Static (ESD) Grounded Workstation Mats", category: "Lab Safety", description: "Dissipative dual-layer heat resistant silicone mats with grounding cords for each bench", standardQty: "10 Sets" },
      { name: "Student Lab Safety Gear (PPE)", category: "Lab Safety", description: "Shatterproof safety goggles, heat-resistant soldering gloves, antistatic wrist straps", standardQty: "30 Sets" },
      { name: "Industrial ABC Dry Powder & CO2 Fire Extinguishers", category: "Emergency Safety", description: "Wall-mounted ISI-marked extinguishers compliant with school laboratory safety norms", standardQty: "2 Cylinders" },
      { name: "Comprehensive First Aid & Burn Care Emergency Station", category: "Emergency Safety", description: "Emergency eye wash, antiseptic solutions, sterile burn dressings, medical adhesive strips", standardQty: "1 Station" }
    ]
  }
];

export const GRANT_LIFECYCLE_STEPS = [
  {
    phase: "Phase 01: Setup & Capital Grant",
    grantAmount: "₹10,00,000 (Tranche 1)",
    timeframe: "Year 1 Deployment",
    focus: "Physical Infrastructure, Workstations & Equipment Procurement",
    description: "Utilized for room renovation, electrical stabilization, ESD bench layout, 3D printers, microcontrollers, tools, and NexRobix brand lab aesthetics."
  },
  {
    phase: "Phase 02: Operational & Mentor Support",
    grantAmount: "₹2,00,000 / Year (Tranches 2-5)",
    timeframe: "Years 2 through 5 (₹10 Lakhs total)",
    focus: "Resident Trainers, Consumable Replacements & Contests",
    description: "Maintains uninterrupted operations, trainer honorarium, annual consumable replenishment, ATL Marathon submission, and student certification."
  }
];
