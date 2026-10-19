import { ReactNode, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "./components/common/Button"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { DashboardShell } from "./components/layout/DashboardShell"

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

import { services } from "./data"
import type { Page, Service } from "./types"

export function App() {
  const [page, setPage] = useState<Page>("home")
  const [cart, setCart] = useState<Service[]>([services[5]])
  const [loggedIn, setLoggedIn] = useState(false)
  const [toast, setToast] = useState("")

  const go = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const notify = (text: string) => {
    setToast(text)
    window.setTimeout(() => setToast(""), 2600)
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
  const dashboardPages = [
    "dashboard",
    "profile",
    "courses",
    "bills",
    "colleges",
    "settings",
  ]

  let content: ReactNode
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
  else if (page === "dashboard")
    content = (
      <DashboardShell page={page} go={go}>
        <DashboardPage />
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
  else
    content = (
      <DashboardShell page={page} go={go}>
        <SettingsPage go={go} toast={notify} />
      </DashboardShell>
    )

  if (authPages.includes(page) || dashboardPages.includes(page))
    return (
      <>
        {content}
        {toast && (
          <div className="toast">
            <CheckCircle2 />
            {toast}
          </div>
        )}
      </>
    )

  return (
    <div className="app">
      <Navbar page={page} go={go} cartCount={cart.length} loggedIn={loggedIn} />
      {content}
      {!["cart", "checkout", "success", "failed"].includes(page) && (
        <Footer go={go} />
      )}
      {["home", "about", "services", "reviews", "contact"].includes(page) && (
        <div className="mobile-book">
          <Button onClick={() => go("services")}>
            Book Now <ArrowRight />
          </Button>
        </div>
      )}
      {toast && (
        <div className="toast">
          <CheckCircle2 />
          {toast}
        </div>
      )}
    </div>
  )
}

export default App
