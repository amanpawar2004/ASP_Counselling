import { ReactNode, useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Maximize2,
  MessageSquare,
  Monitor,
  Radio,
  Smartphone,
  Sparkles,
} from "lucide-react"

import { Button } from "./components/common/Button"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { DashboardShell } from "./components/layout/DashboardShell"
import { WhatsAppButton } from "./components/common/WhatsAppButton"

import { AboutPage } from "./pages/AboutPage"
import { AuthPage } from "./pages/AuthPage"
import { CartPage } from "./pages/CartPage"
import { CheckoutPage } from "./pages/CheckoutPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { PaymentResult } from "./pages/PaymentResult"
import { ReviewsPage } from "./pages/ReviewsPage"
import { ServicesPage } from "./pages/ServicesPage"

import { BillsPage } from "./pages/dashboard/BillsPage"
import { CollegesPage } from "./pages/dashboard/CollegesPage"
import { CoursesPage } from "./pages/dashboard/CoursesPage"
import { DashboardPage } from "./pages/dashboard/DashboardPage"
import { ProfilePage } from "./pages/dashboard/ProfilePage"
import { SettingsPage } from "./pages/dashboard/SettingsPage"
import { ChatPage } from "./pages/dashboard/ChatPage"
import { LiveSessionsPage } from "./pages/dashboard/LiveSessionsPage"
import { LiveRoomPage } from "./pages/dashboard/LiveRoomPage"

import { services } from "./data"
import type { Page, Service } from "./types"

type FrameMode = "responsive" | "desktop-1440" | "mobile-390"

export function App() {
  const [page, setPage] = useState<Page>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash && !hash.startsWith("admin-")) return hash as Page
    }
    return "home"
  })

  const [cart, setCart] = useState<Service[]>([services[5]])
  const [loggedIn, setLoggedIn] = useState(true)
  const [toast, setToast] = useState("")

  // Device Frame Switcher State
  const [frameMode, setFrameMode] = useState<FrameMode>("responsive")

  const go = (p: Page) => {
    // Admin access is currently hidden
    if (p.startsWith("admin-")) {
      p = "dashboard"
    }
    setPage(p)
    if (typeof window !== "undefined") {
      window.location.hash = p
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const notify = (text: string) => {
    setToast(text)
    window.setTimeout(() => setToast(""), 2800)
  }

  const add = (s: Service) => {
    setCart((c) => [...c, s])
    notify(`${s.title} added to cart`)
  }

  const buy = (s: Service) => {
    setCart([s])
    go("checkout")
  }

  const authPages = ["login", "register", "forgot"]
  const studentDashboardPages = [
    "dashboard",
    "profile",
    "courses",
    "bills",
    "colleges",
    "settings",
    "chat",
    "live",
    "live-room",
  ]

  let content: ReactNode

  // 1. PUBLIC WEBSITE PAGES
  if (page === "home") content = <HomePage go={go} />
  else if (page === "about") content = <AboutPage go={go} />
  else if (page === "services") content = <ServicesPage add={add} buy={buy} />
  else if (page === "reviews") content = <ReviewsPage />
  else if (page === "contact") content = <ContactPage toast={notify} />
  else if (page === "login" || page === "register" || page === "forgot")
    content = (
      <AuthPage
        mode={page}
        go={go}
        login={() => {
          setLoggedIn(true)
          go("dashboard")
          notify("Welcome back, Aarav Kumar!")
        }}
      />
    )
  else if (page === "cart")
    content = (
      <CartPage
        cart={cart}
        remove={(i) => setCart((c) => c.filter((_, n) => n !== i))}
        go={go}
      />
    )
  else if (page === "checkout") content = <CheckoutPage cart={cart} go={go} />
  else if (page === "success" || page === "failed")
    content = <PaymentResult success={page === "success"} go={go} />
  // 2. STUDENT DASHBOARD PAGES
  else if (page === "dashboard")
    content = (
      <DashboardShell page={page} go={go}>
        <DashboardPage go={go} />
      </DashboardShell>
    )
  else if (page === "profile")
    content = (
      <DashboardShell page={page} go={go}>
        <ProfilePage toast={notify} />
      </DashboardShell>
    )
  else if (page === "courses")
    content = (
      <DashboardShell page={page} go={go}>
        <CoursesPage go={go} />
      </DashboardShell>
    )
  else if (page === "bills")
    content = (
      <DashboardShell page={page} go={go}>
        <BillsPage toast={notify} />
      </DashboardShell>
    )
  else if (page === "colleges")
    content = (
      <DashboardShell page={page} go={go}>
        <CollegesPage toast={notify} />
      </DashboardShell>
    )
  else if (page === "settings")
    content = (
      <DashboardShell page={page} go={go}>
        <SettingsPage go={go} toast={notify} />
      </DashboardShell>
    )
  else if (page === "chat")
    content = (
      <DashboardShell page={page} go={go}>
        <ChatPage toast={notify} />
      </DashboardShell>
    )
  else if (page === "live")
    content = (
      <DashboardShell page={page} go={go}>
        <LiveSessionsPage
          go={go}
          toast={notify}
          userServices={["Complete Package"]}
        />
      </DashboardShell>
    )
  else if (page === "live-room")
    content = (
      <DashboardShell page={page} go={go}>
        <LiveRoomPage go={go} toast={notify} />
      </DashboardShell>
    )
  else
    content = (
      <DashboardShell page={page} go={go}>
        <DashboardPage go={go} />
      </DashboardShell>
    )

  const isAuth = authPages.includes(page)
  const isStudentDash = studentDashboardPages.includes(page)

  return (
    <div className={`prototype-root-canvas frame-${frameMode}`}>
      {/* Interactive Frame Switcher Toolbar */}
      <header
        className="prototype-top-toolbar"
        aria-label="Figma Make Frame Controller"
      >
        <div className="toolbar-inner">
          <div className="toolbar-left">
            <span className="toolbar-logo-badge">NextStep</span>
            <span className="toolbar-screen-indicator">
              Screen: <strong>{page}</strong>
            </span>
          </div>

          {/* Frame Switcher: Desktop 1440px vs Mobile 390px vs Full Responsive */}
          <div className="toolbar-frames-group">
            <button
              className={`frame-btn ${
                frameMode === "desktop-1440" ? "active" : ""
              }`}
              onClick={() => setFrameMode("desktop-1440")}
              title="Desktop 1440px Canvas Frame"
            >
              <Monitor size={14} />
              <span>Desktop 1440px</span>
            </button>
            <button
              className={`frame-btn ${
                frameMode === "mobile-390" ? "active" : ""
              }`}
              onClick={() => setFrameMode("mobile-390")}
              title="Mobile 390px iPhone Frame"
            >
              <Smartphone size={14} />
              <span>Mobile 390px</span>
            </button>
            <button
              className={`frame-btn ${
                frameMode === "responsive" ? "active" : ""
              }`}
              onClick={() => setFrameMode("responsive")}
              title="Full Responsive Fluid Width"
            >
              <Maximize2 size={14} />
              <span className="hidden sm:inline">Fluid Full</span>
            </button>
          </div>

          {/* Prototype Flows Shortcuts (Student & Public) */}
          <div className="toolbar-flows-group hidden md:flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mr-1">
              Flows:
            </span>
            <button
              className="flow-jump-pill"
              onClick={() => go("chat")}
              title="Student Flow: Chat & Send Message"
            >
              <MessageSquare size={12} className="text-blue-400" />
              <span>Student Chat</span>
            </button>
            <button
              className="flow-jump-pill"
              onClick={() => go("live-room")}
              title="Student Flow: Join Live Webinar Room"
            >
              <Radio size={12} className="text-red-400 animate-pulse" />
              <span>Join Live</span>
            </button>
            <button
              className="flow-jump-pill"
              onClick={() => go("colleges")}
              title="Student Flow: View Shortlist & College Catalog"
            >
              <GraduationCap size={12} className="text-emerald-400" />
              <span>Shortlist</span>
            </button>
            <button
              className="flow-jump-pill"
              onClick={() => go("services")}
              title="Public Flow: Explore Counselling Services"
            >
              <Sparkles size={12} className="text-amber-400" />
              <span>Services</span>
            </button>
          </div>
        </div>
      </header>

      {/* Frame Container Wrapping Content */}
      <div className={`frame-viewport-wrapper mode-${frameMode}`}>
        {frameMode === "mobile-390" && (
          <div className="iphone-status-bar">
            <span>9:41</span>
            <div className="iphone-notch" />
            <div className="iphone-icons">
              <span>5G</span>
              <div className="battery-icon" />
            </div>
          </div>
        )}

        <div className="frame-content-inner">
          {/* Public Navbar if on Public Website */}
          {!isAuth && !isStudentDash && (
            <Navbar
              page={page}
              go={go}
              cartCount={cart.length}
              loggedIn={loggedIn}
            />
          )}

          {/* Main Page View */}
          {content}

          {/* Public Footer */}
          {!isAuth &&
            !isStudentDash &&
            !["cart", "checkout", "success", "failed"].includes(page) && (
              <Footer go={go} />
            )}

          {/* Mobile Bottom Booking CTA Bar on public pages */}
          {["home", "about", "services", "reviews", "contact"].includes(
            page,
          ) && (
            <div className="mobile-book">
              <Button onClick={() => go("services")}>
                Book Now <ArrowRight size={16} />
              </Button>
            </div>
          )}

          {/* Floating WhatsApp Button for Instant Help */}
          {page !== "live-room" && <WhatsAppButton />}

          {/* Global Toast Alert Notification */}
          {toast && (
            <div className="toast fade-up" role="status">
              <CheckCircle2 size={18} className="text-emerald-300 shrink-0" />
              <span>{toast}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
