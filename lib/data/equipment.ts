export interface EquipmentProduct {
  id: string;
  name: string;
  category: "Robotics & Controllers" | "Sensors & Modules" | "Digital Fabrication" | "Aerospace & Drones" | "Tools & Power";
  description: string;
  specs: string;
  tags: string[];
}

export const EQUIPMENT_CATALOGUE: EquipmentProduct[] = [
  {
    id: "eq-1",
    name: "NexRobix Modular Robot Rover Chassis Kit",
    category: "Robotics & Controllers",
    description: "Anodized aluminum & laser-cut chassis with dual DC geared motors, rubber wheels, ball caster, battery holder, and mounting points for multiple microcontrollers.",
    specs: "Operating Voltage: 6-9V DC | High-grip 65mm wheels | Breadboard mountable",
    tags: ["Robotics", "Chassis", "Motors", "STEM"]
  },
  {
    id: "eq-2",
    name: "Arduino Uno R4 WiFi / R3 Prototyping Board",
    category: "Robotics & Controllers",
    description: "Industry-standard ATmega328P / Renesas RA4M1 development microcontroller board with 14 digital I/O pins, 6 analog inputs, and USB programming interface.",
    specs: "5V Operating Voltage | 16 MHz Clock | Flash 32KB | PWM Output",
    tags: ["Arduino", "Controller", "C++", "Block Coding"]
  },
  {
    id: "eq-3",
    name: "ESP32 NodeMCU IoT Development Board",
    category: "Robotics & Controllers",
    description: "Powerful dual-core 240MHz SoC with integrated 2.4 GHz Wi-Fi and Bluetooth BLE 4.2 for building cloud-connected sensors and IoT automation systems.",
    specs: "30-pin GPIO | 520 KB SRAM | Ultra-low power co-processor | Micro-USB",
    tags: ["IoT", "WiFi", "Bluetooth", "Cloud"]
  },
  {
    id: "eq-4",
    name: "Raspberry Pi 4 Model B (4GB RAM) Starter Kit",
    category: "Robotics & Controllers",
    description: "Quad-core 64-bit ARM Cortex-A72 single board computer for running computer vision, OpenCV, Python AI classifiers, and local edge computing.",
    specs: "Quad-core 1.5GHz | Dual 4K HDMI | USB 3.0 | Gigabit Ethernet",
    tags: ["AI", "Raspberry Pi", "Python", "Computer Vision"]
  },
  {
    id: "eq-5",
    name: "Enclosed High-Precision Desktop 3D Printer",
    category: "Digital Fabrication",
    description: "Fully enclosed FDM 3D printer with automatic bed leveling, heated build plate, HEPA carbon air filtration, and safe thermal runaway protection.",
    specs: "Build Volume: 220 x 220 x 250 mm | Speed: up to 300mm/s | PLA/PETG/ABS",
    tags: ["3D Printing", "Fabrication", "Prototyping", "CAD"]
  },
  {
    id: "eq-6",
    name: "Desktop Enclosed CNC Carver & PCB Router",
    category: "Digital Fabrication",
    description: "Compact precision 3-axis CNC router with safety enclosure and emergency interlock, designed for wood carving, acrylic etching, and custom PCB trace isolation.",
    specs: "Spindle: 10,000 RPM ER11 | Working Area: 300 x 180 x 45 mm | GRBL Control",
    tags: ["CNC", "Subtractive Manufacturing", "PCB", "Engineering"]
  },
  {
    id: "eq-7",
    name: "Educational Aerodynamic Wind Tunnel Demonstrator",
    category: "Aerospace & Drones",
    description: "Transparent test section wind tunnel with calibrated variable speed fan, pitot tube airspeed sensor, and lift/drag balance mechanism for airfoil models.",
    specs: "Test Section: 150 x 150 mm | Airspeed up to 25 m/s | Digital Manometer",
    tags: ["Aerospace", "Wind Tunnel", "Physics", "Aerodynamics"]
  },
  {
    id: "eq-8",
    name: "Guarded Quadcopter Drone Training Station",
    category: "Aerospace & Drones",
    description: "Classroom-safe quadcopter with full propeller guards, optical flow altitude hold, barometer stability, and programmable block/Python flight trajectories.",
    specs: "Weight: < 85g (Micro-category) | 13-min flight time | 720p Camera | SDK API",
    tags: ["Drone", "Aviation", "Autonomous Flight", "Safety"]
  },
  {
    id: "eq-9",
    name: "Turbojet Engine Cutaway Demonstration Model",
    category: "Aerospace & Drones",
    description: "Motorized cross-sectional scale cutaway model illustrating intake, axial compressor, combustion chamber, turbine, and exhaust nozzle operation with LED indicators.",
    specs: "Speed-controlled motorized rotor | Dual-color combustion chamber illumination",
    tags: ["Jet Engine", "Propulsion", "Aviation", "Model"]
  },
  {
    id: "eq-10",
    name: "25-in-1 Sensor Discovery Bundle",
    category: "Sensors & Modules",
    description: "Comprehensive sensor array including Ultrasonic HC-SR04, Passive Infrared (PIR), DHT11 Temp/Humidity, Sound, Flame, Soil Moisture, and Gas MQ-2.",
    specs: "3.3V - 5V TTL compatible | Standard 3-pin Dupont headers | Breadboard friendly",
    tags: ["Sensors", "Electronics", "IoT", "Arduino"]
  },
  {
    id: "eq-11",
    name: "Digital ESD-Safe Temperature-Controlled Soldering Station",
    category: "Tools & Power",
    description: "Professional digital soldering station with rapid ceramic heater, sleep mode, ESD ground, temperature range 200°C–480°C, and lead-free alloy wire.",
    specs: "60W Power | ±2°C Temperature stability | Digital LED display",
    tags: ["Soldering", "Safety", "Tools", "Hardware"]
  },
  {
    id: "eq-12",
    name: "Standalone Immersive STEM Virtual Reality Headset",
    category: "Robotics & Controllers",
    description: "All-in-one wireless 6DOF VR headset loaded with educational simulations in astrophysics, molecular structures, robotics kinesthesis, and aerospace flights.",
    specs: "4K Fast-Switch LCD | 128GB Storage | Intuitive dual hand controllers",
    tags: ["VR", "Immersive", "Simulation", "Interactive"]
  }
];
