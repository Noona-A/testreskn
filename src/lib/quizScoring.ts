// Quiz scoring logic - internal only
export interface QuizAnswers {
  oiliness: number;
  breakouts: number;
  sensitivity: number;
  redness: number;
  pigmentation: number;
  ingrowns: number;
  goal: number;
  routine: number;
}

export interface SkinProfile {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  whatThisMeans: string[];
  ingredientFocus: string[];
  bookingUrl: string;
}

// Score calculations (0-3 scale where 0 is most severe)
function calculateOilBalanceScore(answers: QuizAnswers): number {
  // Higher score = drier skin, Lower score = oilier skin
  return answers.oiliness; // 0=very oily, 3=tight/dry
}

function calculateSensitivityScore(answers: QuizAnswers): number {
  // Lower score = more sensitive
  const sensitivityAvg = (answers.sensitivity + answers.redness) / 2;
  return sensitivityAvg;
}

function calculateCongestionScore(answers: QuizAnswers): number {
  // Lower score = more congested
  const congestionAvg = (answers.breakouts + answers.ingrowns) / 2;
  return congestionAvg;
}

export function determineProfile(answers: QuizAnswers): SkinProfile {
  const oilBalance = calculateOilBalanceScore(answers);
  const sensitivity = calculateSensitivityScore(answers);
  const congestion = calculateCongestionScore(answers);

  // Priority-based profile determination
  // Check for oily-acne first (most specific concern)
  if (oilBalance <= 1 && congestion <= 1.5) {
    return profiles["oily-acne"];
  }

  // Check for sensitivity (often requires gentle approach)
  if (sensitivity <= 1) {
    return profiles["sensitive-redness"];
  }

  // Check for pigmentation concerns
  if (answers.pigmentation <= 1) {
    return profiles["pigmentation"];
  }

  // Check for dry/dehydrated
  if (oilBalance >= 2.5) {
    return profiles["dry-dehydrated"];
  }

  // Check for combination with congestion
  if (oilBalance >= 1 && oilBalance <= 2 && congestion <= 1.5) {
    return profiles["combination-congestion"];
  }

  // Default to balanced
  return profiles["balanced"];
}

export const profiles: Record<string, SkinProfile> = {
  "oily-acne": {
    key: "oily-acne",
    title: "Oily & Acne-Prone",
    subtitle: "High sebum production with breakout tendency",
    description: "Your skin produces more oil than average, which can lead to clogged pores and breakouts. The good news? With the right approach, oily skin often ages more gracefully and responds well to targeted treatments.",
    whatThisMeans: [
      "Your skin's sebaceous glands are highly active",
      "Excess oil can mix with dead skin cells to block pores",
      "You may benefit from oil-regulating and clarifying ingredients",
      "Hydration is still essential — overstripping can trigger more oil"
    ],
    ingredientFocus: ["Niacinamide", "Salicylic acid", "Azelaic acid", "Green tea extract", "Centella asiatica"],
    bookingUrl: "https://app.cal.eu/resknclinic/prescription-acne-assessment"
  },
  "sensitive-redness": {
    key: "sensitive-redness",
    title: "Sensitive & Redness-Prone",
    subtitle: "Reactive skin requiring gentle care",
    description: "Your skin has a delicate barrier that reacts easily to new products, environmental changes, or stress. A soothing, minimal routine with barrier-supportive ingredients will help calm and strengthen your skin over time.",
    whatThisMeans: [
      "Your skin barrier may be compromised or naturally thinner",
      "Inflammatory responses occur more readily",
      "You need fragrance-free, gentle formulations",
      "Building tolerance slowly is more effective than aggressive treatments"
    ],
    ingredientFocus: ["Centella asiatica", "Panthenol", "Ceramides", "Squalane", "Propolis"],
    bookingUrl: "https://app.cal.eu/resknclinic/online-skin-consultation"
  },
  "pigmentation": {
    key: "pigmentation",
    title: "Balanced with Pigmentation Concerns",
    subtitle: "Uneven tone and dark spots",
    description: "Your skin shows signs of hyperpigmentation — whether from sun exposure, past breakouts, or hormonal changes. Brightening ingredients combined with consistent sun protection can help even out your complexion over time.",
    whatThisMeans: [
      "Melanin production is uneven in certain areas",
      "Sun protection is critical to prevent further darkening",
      "Results from brightening ingredients take 8-12 weeks",
      "A multi-ingredient approach often works best"
    ],
    ingredientFocus: ["Vitamin C", "Niacinamide", "Tranexamic acid", "Azelaic acid", "Lactic acid"],
    bookingUrl: "https://app.cal.eu/resknclinic/online-skin-consultation"
  },
  "dry-dehydrated": {
    key: "dry-dehydrated",
    title: "Dry & Barrier-Compromised",
    subtitle: "Low oil production and moisture loss",
    description: "Your skin lacks natural oils and may struggle to retain moisture. This can lead to tightness, flakiness, and a dull appearance. Focusing on barrier repair and rich hydration will help restore comfort and radiance.",
    whatThisMeans: [
      "Sebaceous glands produce less natural oil",
      "Your skin barrier may allow excess water loss",
      "Occlusive and emollient ingredients are your friends",
      "Layering hydration helps more than a single heavy cream"
    ],
    ingredientFocus: ["Hyaluronic acid", "Ceramides", "Squalane", "Panthenol", "Snail mucin"],
    bookingUrl: "https://app.cal.eu/resknclinic/online-skin-consultation"
  },
  "combination-congestion": {
    key: "combination-congestion",
    title: "Combination & Congestion-Prone",
    subtitle: "Mixed skin with clogged pores",
    description: "Your skin varies across different areas — perhaps oilier in the T-zone and drier on cheeks. You may also notice clogged pores or occasional breakouts. A balanced approach targeting specific zones will help.",
    whatThisMeans: [
      "Different face areas have different needs",
      "Pores can become blocked despite not being very oily",
      "Gentle exfoliation helps keep skin clear",
      "You may need different products for different zones"
    ],
    ingredientFocus: ["Niacinamide", "Salicylic acid", "Lactic acid", "Centella asiatica", "Hyaluronic acid"],
    bookingUrl: "https://app.cal.eu/resknclinic/online-skin-consultation"
  },
  "balanced": {
    key: "balanced",
    title: "Balanced & Healthy",
    subtitle: "Well-functioning skin with maintenance focus",
    description: "Your skin appears to be well-balanced with no major concerns. Your focus should be on maintaining this healthy state, preventing future issues, and addressing any specific goals you have in mind.",
    whatThisMeans: [
      "Your skin barrier is functioning well",
      "Prevention is your best strategy",
      "Antioxidants and SPF protect your investment",
      "You can focus on targeted concerns like texture or early ageing signs"
    ],
    ingredientFocus: ["Vitamin C", "Peptides", "Hyaluronic acid", "Niacinamide", "Green tea extract"],
    bookingUrl: "https://app.cal.eu/resknclinic/online-skin-consultation"
  }
};

// Map ingredient names to their URL slugs
export const ingredientSlugs: Record<string, string> = {
  "Centella asiatica": "centella-asiatica",
  "Niacinamide": "niacinamide",
  "Hyaluronic acid": "hyaluronic-acid",
  "Ceramides": "ceramides",
  "Azelaic acid": "azelaic-acid",
  "Salicylic acid": "salicylic-acid",
  "Lactic acid": "lactic-acid",
  "Vitamin C": "vitamin-c",
  "Tranexamic acid": "tranexamic-acid",
  "Panthenol": "panthenol",
  "Squalane": "squalane",
  "Peptides": "peptides",
  "Snail mucin": "snail-mucin",
  "Propolis": "propolis",
  "Green tea extract": "green-tea-extract"
};
