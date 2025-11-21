export type Page = 'HOME' | 'AI_TRAINER';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkoutRequest {
  goal: string;
  level: string;
  daysPerWeek: string;
  duration: string;
  equipment: string;
}

export enum FitnessGoal {
  WEIGHT_LOSS = 'Weight Loss',
  MUSCLE_GAIN = 'Muscle Gain',
  ENDURANCE = 'Endurance',
  GENERAL_HEALTH = 'General Health'
}

export enum FitnessLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}