import {
  Award,
  BookOpen,
  CircleUserRound,
  FileText,
  GraduationCap,
  Home,
  MessageSquare,
  Radio,
  ReceiptText,
  Send,
  UserRound,
  Zap,
} from "lucide-react"
import type { ChatMessage, LiveSession, Page, Review, Service } from "../types"

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
    active: true,
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
    active: true,
  },
  {
    title: "Application Guidance",
    price: 2000,
    icon: Send,
    description:
      "End-to-end support to submit a strong, error-free application.",
    features: ["Document checklist", "Form review", "Deadline tracking"],
    active: true,
  },
  {
    title: "SOP / Essay Review",
    price: 800,
    icon: BookOpen,
    description:
      "Expert feedback that helps your story stand out authentically.",
    features: ["Two review rounds", "Structure feedback", "Language polish"],
    active: true,
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
    active: true,
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
    active: true,
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

export const dashNav: [Page, string, typeof Home, {
  badge?: string
  isLive?: boolean
}?][] = [
  ["dashboard", "Home", Home],
  ["courses", "Courses", BookOpen],
  ["bills", "Bills", ReceiptText],
  ["colleges", "Colleges", GraduationCap],
  ["chat", "Chat", MessageSquare, { badge: "2" }],
  ["live", "Live", Radio, { isLive: true }],
  ["profile", "Profile", CircleUserRound],
]

export const partnerLogos = [
  { name: "IIT Bombay", tag: "Premier", mark: "IITB" },
  { name: "BITS Pilani", tag: "Deemed Top 1", mark: "BITS" },
  { name: "COEP Technological Univ", tag: "Govt Autonomous", mark: "COEP" },
  { name: "VIT Vellore", tag: "NAAC A++", mark: "VIT" },
  { name: "Manipal University", tag: "Institution of Eminence", mark: "MAHE" },
  { name: "Thapar Institute", tag: "Top Rated", mark: "TIET" },
  { name: "RV College of Engg", tag: "VTU Top Rank", mark: "RVCE" },
  { name: "Pune University (SPPU)", tag: "State Univ", mark: "SPPU" },
]

export const initialChatMessages: ChatMessage[] = [
  {
    id: "msg-1",
    sender: "admin",
    senderName: "Neha Kapoor",
    senderAvatar: "NK",
    text: "Hi Aarav! Welcome to NextStep Admissions. I am your lead counsellor. I’ve reviewed your initial academic profile and score of 96.4%.",
    timestamp: "10:30 AM",
  },
  {
    id: "msg-2",
    sender: "student",
    senderName: "Aarav Kumar",
    senderAvatar: "AK",
    text: "Hello ma'am! Thank you so much. I wanted to understand whether my MHT-CET 99.1 percentile gives me a realistic shot at COEP or PICT CSE.",
    timestamp: "10:32 AM",
  },
  {
    id: "msg-3",
    sender: "admin",
    senderName: "Neha Kapoor",
    senderAvatar: "NK",
    text: "At 99.1%ile, COEP CSE will be in your 'Dream' bucket, but PICT IT, PICT AI&DS and VJTI E&TC are solid 'Target' options. I am curating your personalized Dream-Target-Safe shortlist right now.",
    timestamp: "10:35 AM",
  },
  {
    id: "msg-4",
    sender: "admin",
    senderName: "Neha Kapoor",
    senderAvatar: "NK",
    text: "I’ve attached the official CAP Round 2024 cutoff analysis for Pune engineering colleges so you can cross-verify.",
    timestamp: "10:36 AM",
    attachment: {
      name: "CAP_Round_Cutoffs_Analysis_2024.pdf",
      type: "pdf",
      size: "2.8 MB",
    },
  },
  {
    id: "msg-5",
    sender: "student",
    senderName: "Aarav Kumar",
    senderAvatar: "AK",
    text: "This is super helpful! When can we connect for the next 1-on-1 strategy call?",
    timestamp: "10:40 AM",
  },
  {
    id: "msg-6",
    sender: "admin",
    senderName: "Neha Kapoor",
    senderAvatar: "NK",
    text: "We have our scheduled video session tomorrow at 4:00 PM. Also, don't miss our Live Session today on CAP Round Strategy!",
    timestamp: "10:42 AM",
  },
]

export const initialLiveSessions: LiveSession[] = [
  {
    id: "live-1",
    title: "MHT-CET & JEE CAP Round Strategy 2025",
    host: "Neha Kapoor",
    hostRole: "Lead Admissions Advisor",
    date: "Today",
    time: "Live Now",
    duration: "60 mins",
    status: "live",
    viewers: 48,
    serviceRequired: "Complete Package",
    description:
      "Live walkthrough of choice-filling preferences, seat matrix analysis, and how to avoid getting stuck in lower-tier rounds.",
  },
  {
    id: "live-2",
    title: "BITS Pilani, VIT & Top Private Universities Counselling",
    host: "Dr. Rajesh Rao",
    hostRole: "Senior Counsellor",
    date: "Tomorrow, 21 Oct",
    time: "5:00 PM - 6:00 PM",
    duration: "60 mins",
    status: "upcoming",
    serviceRequired: "All Enrolled",
    description:
      "Compare fee vs ROI, campus life, cutoffs, and backup options across premier private institutions.",
  },
  {
    id: "live-3",
    title: "Scholarships & Fee Waiver (TFWS/EWS) Masterclass",
    host: "Neha Kapoor",
    hostRole: "Lead Admissions Advisor",
    date: "Friday, 24 Oct",
    time: "6:00 PM - 7:00 PM",
    duration: "60 mins",
    status: "upcoming",
    serviceRequired: "Complete Package",
    description:
      "How to claim 100% tuition fee waiver through state and central government scholarship schemes.",
  },
  {
    id: "live-4",
    title: "How to Build a Dream-Target-Safe Shortlist",
    host: "Neha Kapoor",
    hostRole: "Lead Admissions Advisor",
    date: "14 Jun 2025",
    time: "Recorded",
    duration: "48 mins",
    status: "recorded",
    serviceRequired: "All Enrolled",
    description:
      "The 3-tier formula used by 500+ successful applicants to avoid admission surprises.",
    recordingUrl: "https://example.com/recording-4",
  },
  {
    id: "live-5",
    title: "SOP & Personal Essay Mastery Workshop",
    host: "Dr. Rajesh Rao",
    hostRole: "Senior Counsellor",
    date: "08 Jun 2025",
    time: "Recorded",
    duration: "55 mins",
    status: "recorded",
    serviceRequired: "All Enrolled",
    description:
      "Sentence structures, hook techniques, and authentic storytelling that impress admission panels.",
    recordingUrl: "https://example.com/recording-5",
  },
]
