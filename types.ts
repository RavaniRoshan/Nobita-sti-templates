export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface ArchitectureStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReasoningStep {
  step: string;
  detail: string;
  status: 'pending' | 'working' | 'complete';
}

export interface ReasoningResponse {
  steps: ReasoningStep[];
  finalAnswer: string;
}
