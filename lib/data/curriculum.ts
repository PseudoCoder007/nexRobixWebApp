export interface CurriculumStage {
  gradeBand: string;
  stageName: string;
  theme: string;
  cbseAlignment: string;
  summary: string;
  topics: string[];
  studentArtifacts: string[];
  badgeColor: string;
}

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    gradeBand: "Grades 1 - 5",
    stageName: "Foundation Stage",
    theme: "Explore, Touch & Make",
    cbseAlignment: "NEP 2020 Foundational AI & STEM Explorations",
    summary: "Fostering innate curiosity through tactile building, simple machines, safe magnetic circuits, visual sequencing, and immersive VR storyboards.",
    topics: [
      "Levers, pulleys, wheels & mechanical advantages",
      "Safe low-voltage snap circuits, switches & LEDs",
      "Visual block sequencing & algorithmic storytelling",
      "Introduction to 3D spatial thinking & paper/wood modeling",
      "VR-guided exploration of planetary systems & biology"
    ],
    studentArtifacts: [
      "Working rubber-band paddle boat",
      "Hydraulic syringe crane arm",
      "Light-up greeting card circuit",
      "First block-based interactive story"
    ],
    badgeColor: "emerald"
  },
  {
    gradeBand: "Grades 6 - 8",
    stageName: "Explorer Stage",
    theme: "Build, Sense & Program",
    cbseAlignment: "CBSE NEP 2020 Middle School Coding & Tinkering Mandate",
    summary: "Transitioning to microcontroller programming, sensor logic, basic Python text coding, and 3D CAD design for rapid prototyping.",
    topics: [
      "Microcontroller architecture: Arduino Uno & breadboarding",
      "Digital vs. analog sensors (LDR, Ultrasonic, IR, Temperature)",
      "Actuator control: DC motors, servo sweeps, and buzzer melodies",
      "Visual to text-based block coding and introductory Python",
      "3D modeling in Tinkercad & slicing for 3D printing",
      "Aerodynamics basics: glider flight dynamics & drone principles"
    ],
    studentArtifacts: [
      "Smart automatic street lighting system",
      "Autonomous obstacle-avoiding wheeled robot",
      "Digital weather station with LCD readout",
      "Custom 3D printed mechanical keytag / gear assembly"
    ],
    badgeColor: "blue"
  },
  {
    gradeBand: "Grades 9 - 10",
    stageName: "Innovator Stage",
    theme: "Integrate, Automate & Analyze",
    cbseAlignment: "CBSE Skill Subject Code 417 (AI) & Code 402 (IT)",
    summary: "Deep integration with CBSE AI syllabus: Python programming, data science fundamentals, computer vision, and IoT smart campus prototypes.",
    topics: [
      "Python programming: data structures, loops, functions, and libraries",
      "CBSE Code 417 Core: Computer Vision, Natural Language Processing, Ethics",
      "IoT development with ESP32: MQTT protocol, cloud sensor telemetry",
      "Desktop CNC routing: subtractive design & PCB carving basics",
      "Quadcopter mechanics, flight telemetry & manual piloting safety",
      "Design thinking methodology: ideation to MVP patentable prototypes"
    ],
    studentArtifacts: [
      "AI facial recognition / attendance logging prototype",
      "Cloud-connected smart agricultural soil monitor",
      "Line-following robot with PID motor control",
      "Documented project report for CBSE practical portfolio"
    ],
    badgeColor: "amber"
  },
  {
    gradeBand: "Grades 11 - 12 & College",
    stageName: "Capstone & Competition Track",
    theme: "Engineer, Validate & Compete",
    cbseAlignment: "WRO, ATL Marathon & IIT Bombay e-Yantra Track",
    summary: "Advanced embedded engineering, Edge AI, Raspberry Pi computing, and national competition mentoring for real-world patents and incubators.",
    topics: [
      "Edge AI inference on Raspberry Pi with TensorFlow Lite / Coral",
      "ROS (Robot Operating System) simulation fundamentals",
      "Advanced aeromodelling: airfoil lift analysis & wind-tunnel testing",
      "PCB design in KiCAD and SMD component assembly",
      "Preparation for World Robot Olympiad (WRO) & ATL Marathon",
      "Incubation readiness: IP filing, technical documentation & pitch"
    ],
    studentArtifacts: [
      "Multi-terrain search-and-rescue rover",
      "Computer vision autonomous sorting conveyor",
      "Autonomous GPS-waypoint aerial surveillance drone",
      "Full capstone patent application draft & working demonstrator"
    ],
    badgeColor: "indigo"
  }
];

export const ANNUAL_SESSION_STRUCTURE = [
  {
    phase: "Term 1: Orientation & Fundamentals",
    sessions: "Sessions 01 - 08",
    description: "Lab safety passport, core tooling protocols, electronics baseline, and introductory builds."
  },
  {
    phase: "Term 2: Programmable Systems & Sensors",
    sessions: "Sessions 09 - 18",
    description: "Microcontroller logic, sensor integration, actuator feedback loops, and 3D modeling."
  },
  {
    phase: "Term 3: Advanced Applications & Emerging Tech",
    sessions: "Sessions 19 - 24",
    description: "AI machine learning classifiers, IoT connectivity, aerospace aerodynamics, and VR simulation."
  },
  {
    phase: "Term 4: Capstone & Annual STEAM Exhibition",
    sessions: "Sessions 25 - 30",
    description: "Student team projects, iteration, documentation, portfolio generation, and school showcase."
  }
];
