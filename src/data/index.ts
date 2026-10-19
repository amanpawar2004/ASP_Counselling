import {
  Award,
  BookOpen,
  CircleUserRound,
  FileText,
  GraduationCap,
  Home,
  ReceiptText,
  Send,
  UserRound,
  Zap,
} from "lucide-react"
import type { Page, Review, Service } from "../types"

export const services: Service[] = [
  {
    title: "Personal Counselling",
    price: 1500,
    icon: UserRound,
    description:
      "One-to-one clarity on the right course and career path for you.",
    features: [
      "60-min video session",
      "Personal action plan",
      "7-day chat support",
    ],
  },
  {
    title: "College List (PDF)",
    price: 1000,
    icon: FileText,
    description:
      "A personalised shortlist built around your goals, score and budget.",
    features: [
      "15–20 matched colleges",
      "Fees and cut-offs",
      "Admission deadlines",
    ],
  },
  {
    title: "Application Guidance",
    price: 2000,
    icon: Send,
    description:
      "End-to-end support to submit a strong, error-free application.",
    features: ["Document checklist", "Form review", "Deadline tracking"],
  },
  {
    title: "SOP / Essay Review",
    price: 800,
    icon: BookOpen,
    description:
      "Expert feedback that helps your story stand out authentically.",
    features: ["Two review rounds", "Structure feedback", "Language polish"],
  },
  {
    title: "Scholarship Help",
    price: 1200,
    icon: Award,
    description:
      "Find relevant scholarships and apply with complete confidence.",
    features: [
      "Matched opportunities",
      "Eligibility check",
      "Application support",
    ],
  },
  {
    title: "Complete Package",
    price: 4500,
    icon: Zap,
    description:
      "Everything you need from discovery to admission—all in one place.",
    features: [
      "3 counselling sessions",
      "College list + applications",
      "SOP and scholarship help",
    ],
    badge: "Best Value",
  },
]

export const reviews: Review[] = [
  {
    name: "Aanya Sharma",
    course: "B.Tech",
    college: "BITS Pilani",
    text: "I went from completely confused to accepting an offer from my dream college. The shortlist was spot-on!",
    photo: "AS",
  },
  {
    name: "Rohan Mehta",
    course: "MBA",
    college: "IIM Kozhikode",
    text: "The application reviews were detailed, fast and incredibly practical. I felt supported at every step.",
    photo: "RM",
  },
  {
    name: "Meera Nair",
    course: "Design",
    college: "NID Ahmedabad",
    text: "My counsellor really listened. We found a path that matched my strengths instead of following the crowd.",
    photo: "MN",
  },
]

export const heroImage =
  "https://images.unsplash.com/photo-1680084521738-87a53d7a50d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"

export const counsellorImage =
  "https://images.unsplash.com/photo-1687709348710-05314eea5476?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000"

export const dashNav: [Page, string, typeof Home][] = [
  ["dashboard", "Home", Home],
  ["courses", "Courses", BookOpen],
  ["bills", "Bills", ReceiptText],
  ["colleges", "Colleges", GraduationCap],
  ["profile", "Profile", CircleUserRound],
]
