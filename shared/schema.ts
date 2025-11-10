import { z } from "zod";

// Content data structures for the tutoring website

export const classInfo = z.object({
  id: z.string(),
  title: z.string(),
  grades: z.string(),
  subjects: z.string(),
  boards: z.string(),
});

export const featureCard = z.object({
  id: z.string(),
  title: z.string(),
  icon: z.string(),
  items: z.array(z.string()),
});

export const pricingTier = z.object({
  id: z.string(),
  category: z.string(),
  oneToOne: z.object({
    price: z.string(),
    details: z.string(),
  }),
  group: z.object({
    price: z.string(),
    details: z.string(),
  }),
  isOnlineOnly: z.boolean().optional(),
});

export const importantNote = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export type ClassInfo = z.infer<typeof classInfo>;
export type FeatureCard = z.infer<typeof featureCard>;
export type PricingTier = z.infer<typeof pricingTier>;
export type ImportantNote = z.infer<typeof importantNote>;

// Static content data
export const classesData: ClassInfo[] = [
  {
    id: "1",
    title: "Class 1 to 7 (All Subjects)",
    grades: "Class 1-7",
    subjects: "All Subjects",
    boards: "CBSE / ASSEB or SEBA",
  },
  {
    id: "2",
    title: "Class 8, 9 & 10 (Math & Science)",
    grades: "Class 8-10",
    subjects: "Math & Science",
    boards: "CBSE / ASSEB or SEBA",
  },
  {
    id: "3",
    title: "Class 12 (PCM)",
    grades: "Class 12",
    subjects: "Physics,Chemistry & Mathematics",
    boards: "CBSE / ASSEB or SEBA",
  },
];

export const featuresData: FeatureCard[] = [
  {
    id: "1",
    title: "Individualized Learning",
    icon: "user",
    items: [
      "One-to-One or Group Tuition (based on student's preference)",
      "Personalized Study Plans tailored to strengths & weaknesses",
      "Conceptual Learning with Doubt Clearance",
      "Exam-Oriented Preparation with regular revisions",
    ],
  },
  {
    id: "2",
    title: "Smart Progress Tracking",
    icon: "chart",
    items: [
      "Parent Dashboard – Track progress, test results, attendance & performance",
      "Detailed Progress Reports after each test (topic-wise and subject-wise)",
      "Goal Tracking – Set learning goals and monitor achievement",
      "Regular Feedback System for continuous improvement",
    ],
  },
  {
    id: "3",
    title: "Assessment & Practice",
    icon: "clipboard",
    items: [
      "Weekly Mock Tests, MCQs, and Board/Entrance-oriented practice papers",
      "Homework assignments with correction and feedback",
      "Special revision classes before exams for maximum confidence",
      "Easy-to-understand notes, formula sheets & quick revision material",
    ],
  },
  {
    id: "4",
    title: "Technology-Enhanced Support",
    icon: "computer",
    items: [
      "Digital Library – Access to notes, assignments, and question banks",
      "Online Homework Submission & Doubt Clearance (via WhatsApp/Telegram)",
      "Recorded Sessions for online classes (never miss a topic)",
      "Graphical Performance Analytics for clear progress insights",
      "Hybrid Mode – Choice of Offline + Online classes",
    ],
  },
  {
    id: "5",
    title: "Motivation & Growth",
    icon: "trophy",
    items: [
      "Reward System – Certificates, badges, or appreciation for achievements",
      "Peer Learning – Group quizzes and competitions for fun learning",
      "Career Guidance Sessions – Pathways for boards, NEET, JEE, CPT, and other exams",
      "Multiple Language Support – Concepts explained in English + Assamese",
    ],
  },
  {
    id: "6",
    title: "Comfort & Flexibility",
    icon: "clock",
    items: [
      "Flexible Class Timings as per student's routine",
      "3–4 classes per week (adjustable as needed)",
      "Both Online & Offline availability",
      "Easy communication via WhatsApp/Telegram groups for updates",
    ],
  },
];

export const pricingData: PricingTier[] = [
  {
    id: "1",
    category: "Class 1 – 7 (All Subjects)",
    oneToOne: {
      price: "₹1500 – ₹2500",
      details: "per month (15 classes)",
    },
    group: {
      price: "₹1000 – ₹2000",
      details: "per month (15 classes)",
    },
  },
  {
    id: "2",
    category: "Class 8 – 10 (Single Subject)",
    oneToOne: {
      price: "₹2000 – ₹3500",
      details: "per month (15 classes + extra test days)",
    },
    group: {
      price: "₹1500 – ₹3000",
      details: "per month (15 classes + extra test days)",
    },
  },
  {
    id: "3",
    category: "Class 8 – 10 (Both Subjects)",
    oneToOne: {
      price: "₹3500 – ₹5000",
      details: "per month (15 classes + extra test days)",
    },
    group: {
      price: "₹2500 – ₹4000",
      details: "per month (15 classes + extra test days)",
    },
  },
  {
    id: "4",
    category: "Class 12 (PCM)",
    oneToOne: {
      price: "1500",
      details: "per subject & per month (12 classes)",
    },
    group: {
      price: "₹800",
      details: "per subject & per month (12 classes)",
    },
    isOnlineOnly: false,
  },
];

export const importantNotesData: ImportantNote[] = [
  {
    id: "1",
    title: "Class Schedule",
    description:
      "Home Tuition classes will be held 3–4 days per week, depending on the available schedule.",
  },
  {
    id: "2",
    title: "Online Classes",
    description:
      "Online Tuition will be conducted LIVE on Zoom, 3 days per week.",
  },
  {
    id: "3",
    title: "Assessment",
    description:
      "Weekly Tests & MCQ Practice will be provided for better preparation.",
  },
  {
    id: "4",
    title: "Language",
    description:
      "Tuition is  for  both Assamese & English Medium students, but the explanation will be provided in Assamese for better understanding.",
  },
];
