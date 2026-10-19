import { LucideIcon } from "lucide-react"

export type Page = "home" | "about" | "services" | "reviews" | "contact" | "login" | "register" | "forgot" | "cart" | "checkout" | "success" | "failed" | "dashboard" | "profile" | "courses" | "bills" | "colleges" | "settings"

export type Service = {
  title: string
  price: number
  icon: LucideIcon
  description: string
  features: string[]
  badge?: string
}

export type Review = {
  name: string
  course: string
  college: string
  text: string
  photo: string
}
