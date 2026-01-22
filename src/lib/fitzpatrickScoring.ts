export interface FitzpatrickQuestion {
  id: string;
  category: string;
  question: string;
  options: { label: string; score: number }[];
}

export const fitzpatrickQuestions: FitzpatrickQuestion[] = [
  // Genetic Disposition
  {
    id: 'eye_colour',
    category: 'Genetic Disposition',
    question: 'What is your natural eye colour?',
    options: [
      { label: 'Light blue, light grey, or light green', score: 0 },
      { label: 'Blue, grey, or green', score: 1 },
      { label: 'Hazel or light brown', score: 2 },
      { label: 'Dark brown', score: 3 },
      { label: 'Brownish black to black', score: 4 },
    ],
  },
  {
    id: 'hair_colour',
    category: 'Genetic Disposition',
    question: 'What is your natural hair colour?',
    options: [
      { label: 'Red or light blonde', score: 0 },
      { label: 'Blonde', score: 1 },
      { label: 'Dark blonde or light brown', score: 2 },
      { label: 'Dark brown', score: 3 },
      { label: 'Black', score: 4 },
    ],
  },
  {
    id: 'skin_colour',
    category: 'Genetic Disposition',
    question: 'What is your skin colour in unexposed areas?',
    options: [
      { label: 'Reddish', score: 0 },
      { label: 'Very pale', score: 1 },
      { label: 'Pale with beige tint', score: 2 },
      { label: 'Light brown', score: 3 },
      { label: 'Dark brown or black', score: 4 },
    ],
  },
  {
    id: 'freckles',
    category: 'Genetic Disposition',
    question: 'Do you have freckles on unexposed areas?',
    options: [
      { label: 'Many', score: 0 },
      { label: 'Several', score: 1 },
      { label: 'Few', score: 2 },
      { label: 'Very few', score: 3 },
      { label: 'None', score: 4 },
    ],
  },
  // Reaction to Sun Exposure
  {
    id: 'sun_reaction',
    category: 'Reaction to Sun Exposure',
    question: 'What happens when you stay in the sun too long?',
    options: [
      { label: 'Painful redness, blistering, peeling', score: 0 },
      { label: 'Blistering followed by peeling', score: 1 },
      { label: 'Burns sometimes followed by peeling', score: 2 },
      { label: 'Rare burns', score: 3 },
      { label: 'Never had burns', score: 4 },
    ],
  },
  {
    id: 'tan_degree',
    category: 'Reaction to Sun Exposure',
    question: 'To what degree do you turn brown?',
    options: [
      { label: 'Hardly or not at all', score: 0 },
      { label: 'Light colour tan', score: 1 },
      { label: 'Reasonable tan', score: 2 },
      { label: 'Tan very easily', score: 3 },
      { label: 'Turn dark brown quickly', score: 4 },
    ],
  },
  {
    id: 'tan_speed',
    category: 'Reaction to Sun Exposure',
    question: 'Do you turn brown within several hours after sun exposure?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Seldom', score: 1 },
      { label: 'Sometimes', score: 2 },
      { label: 'Often', score: 3 },
      { label: 'Always', score: 4 },
    ],
  },
  {
    id: 'face_reaction',
    category: 'Reaction to Sun Exposure',
    question: 'How does your face react to the sun?',
    options: [
      { label: 'Very sensitive', score: 0 },
      { label: 'Sensitive', score: 1 },
      { label: 'Normal', score: 2 },
      { label: 'Very resistant', score: 3 },
      { label: 'Never had a problem', score: 4 },
    ],
  },
  // Tanning Habits
  {
    id: 'last_exposure',
    category: 'Tanning Habits',
    question: 'When did you last expose your body to sun or sunbed?',
    options: [
      { label: 'More than 3 months ago', score: 0 },
      { label: '2-3 months ago', score: 1 },
      { label: '1-2 months ago', score: 2 },
      { label: 'Less than a month ago', score: 3 },
      { label: 'Less than 2 weeks ago', score: 4 },
    ],
  },
  {
    id: 'area_exposure',
    category: 'Tanning Habits',
    question: 'Did you expose the area you want treated to the sun?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Hardly ever', score: 1 },
      { label: 'Sometimes', score: 2 },
      { label: 'Often', score: 3 },
      { label: 'Always', score: 4 },
    ],
  },
];

export interface FitzpatrickResult {
  totalScore: number;
  type: string;
  description: string;
}

export function calculateFitzpatrickType(scores: Record<string, number>): FitzpatrickResult {
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  let type: string;
  let description: string;

  if (totalScore <= 7) {
    type = 'Type I';
    description = 'Extremely fair skin, always burns, never tans';
  } else if (totalScore <= 16) {
    type = 'Type II';
    description = 'Fair skin, always burns, minimal tanning';
  } else if (totalScore <= 25) {
    type = 'Type III';
    description = 'Medium skin, sometimes burns, always tans';
  } else if (totalScore <= 30) {
    type = 'Type IV';
    description = 'Olive skin, rarely burns, always tans';
  } else {
    type = 'Type V–VI';
    description = 'Moderate to heavily pigmented brown to black skin, never burns, always tans';
  }

  return { totalScore, type, description };
}
