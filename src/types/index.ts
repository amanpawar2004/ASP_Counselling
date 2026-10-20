import { LucideIcon } from "lucide-react"

export type Page = "home" | "about" | "services" | "reviews" | "contact" | "login" | "register" | "forgot" | "cart" | "checkout" | "success" | "failed" | // Student Dashboard Pages
"dashboard" | "profile" | "courses" | "bills" | "colleges" | "settings" | "chat" | "live" | "live-room" | // Admin Panel Pages
"admin-login" | "admin-dashboard" | "admin-students" | "admin-student-profile" | "admin-assign-list" | "admin-chat" | "admin-live" | "admin-colleges" | "admin-services" | "admin-orders" | "admin-reviews" | "admin-settings"

export type Service = {
  title: string
  price: number
  icon: LucideIcon
  description: string
  features: string[]
  badge?: string
  active?: boolean
}

export type Review = {
  name: string
  course: string
  college: string
  text: string
  photo: string
}

export type ChatMessage = {
  id: string
  sender: "student" | "admin"
  senderName: string
  senderAvatar?: string
  text: string
  timestamp: string
  attachment?: {
    name: string
    type: "pdf" | "image"
    size: string
  }
}

export type LiveSession = {
  id: string
  title: string
  host: string
  hostRole: string
  date: string
  time: string
  duration: string
  status: "live" | "upcoming" | "recorded"
  viewers?: number
  serviceRequired: string
  description: string
  recordingUrl?: string
}

export type BranchDetail = {
  branch: string
  seats: number
  fees: string
  cutoff: string
}

export type College = {
  id: string
  name: string
  university: string
  city: string
  state: string
  type: "Govt" | "Private" | "Autonomous"
  branches: string[]
  feesRange: string
  cutoffRange: string
  website: string
  naacGrade: string
  branchDetails: BranchDetail[]
}

export type AssignedList = {
  id: string
  title: string
  date: string
  collegeCount: number
  pdfUrl?: string
  status: "Delivered" | "Draft"
}

export type Student = {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  stream: "Science" | "Commerce" | "Humanities" | "Design"
  city: string
  score12th: string
  entranceRank: string
  preferredCourse: string
  budget: string
  joinedDate: string
  status: "Active" | "Inactive"
  servicesBought: string[]
  notes: string[]
  assignedLists: AssignedList[]
}

export type Order = {
  id: string
  studentName: string
  studentEmail: string
  serviceName: string
  amount: number
  date: string
  status: "Paid" | "Pending" | "Failed"
  paymentMethod: "UPI" | "Card" | "Net Banking" | "Wallet"
}

export type AdminReview = {
  id: string
  studentName: string
  course: string
  college: string
  rating: number
  text: string
  date: string
  status: "Approved" | "Pending" | "Hidden"
}

export type Staff = {
  id: string
  name: string
  email: string
  role: "Admin" | "Senior Counsellor" | "Reviewer"
  active: boolean
  lastActive: string
}
