export interface PartnershipScenario {
  studentCount: number;
  annualFeePerStudent: number;
  monthlyEquivalent: number;
  totalAnnualCollection: number;
  trainerCost: number;
  kitsCost: number;
  maintenanceAllowance: number;
  netOperatingSurplus: number;
  schoolShareYear1: number; // 70%
  nexrobixShareYear1: number; // 30%
  schoolShareYear2: number; // 50%
  nexrobixShareYear2: number; // 50%
}

export function calculatePartnershipModel(
  studentCount: number,
  monthlyFee: number = 250
): PartnershipScenario {
  const annualFee = monthlyFee * 12;
  const totalAnnualCollection = studentCount * annualFee;
  
  // Trainer allocation: 1 trainer per 500 students approx (₹4L/yr each)
  const trainerCount = Math.max(1, Math.ceil(studentCount / 500));
  const trainerCost = trainerCount * 400000;
  
  // Annual kits: ₹1,000 per student (hardware kit they take home / keep)
  const kitsCost = studentCount * 1000;
  
  // Lab consumables & maintenance allowance
  const maintenanceAllowance = Math.round(studentCount * 100);
  
  const netOperatingSurplus = Math.max(
    0,
    totalAnnualCollection - (trainerCost + kitsCost + maintenanceAllowance)
  );

  const schoolShareYear1 = Math.round(netOperatingSurplus * 0.70);
  const nexrobixShareYear1 = Math.round(netOperatingSurplus * 0.30);

  const schoolShareYear2 = Math.round(netOperatingSurplus * 0.50);
  const nexrobixShareYear2 = Math.round(netOperatingSurplus * 0.50);

  return {
    studentCount,
    annualFeePerStudent: annualFee,
    monthlyEquivalent: monthlyFee,
    totalAnnualCollection,
    trainerCost,
    kitsCost,
    maintenanceAllowance,
    netOperatingSurplus,
    schoolShareYear1,
    nexrobixShareYear1,
    schoolShareYear2,
    nexrobixShareYear2,
  };
}

export const PARTNERSHIP_BENEFITS = [
  {
    title: "Zero In-House Trainer Burden",
    description: "Schools do not need to hunt, hire, or manage specialized robotics faculty. NexRobix recruits, trains, and deploys qualified engineers."
  },
  {
    title: "Fast Capex Recovery (Year 1 70% Share)",
    description: "The school receives 70% of the net programme surplus in Year 1, allowing management to recover their initial lab infrastructure setup investment within 10-14 months."
  },
  {
    title: "Predictable, All-Inclusive Model",
    description: "The ₹250/month per student fee covers the student's personal hardware kit, 30 lab periods, consumables, competitions, and full lab maintenance."
  },
  {
    title: "Tangible Admissions & Branding Differentiator",
    description: "Having an 'AI, Robotics & Aerospace Lab by NexRobix' prominently showcased during admissions cycles increases school enrollment attractiveness."
  }
];
