import { useState } from "react"
import { Menu, ShoppingBag, X } from "lucide-react"
import type { Page } from "../../types"
import { Button } from "../common/Button"
import { Logo } from "../common/Logo"

export type NavbarProps = {
  page: Page
  go: (p: Page) => void
  cartCount: number
  loggedIn: boolean
}

export function Navbar({ page, go, cartCount, loggedIn }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const links: [string, Page][] = [
    ["Home", "home"],
    ["About", "about"],
    ["Services", "services"],
    ["Reviews", "reviews"],
    ["Contact", "contact"],
  ]
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo go={go} />
        <nav className={open ? "open" : ""}>
          {links.map(([label, target]) => (
            <button
              key={target}
              className={page === target ? "active" : ""}
              onClick={() => {
                go(target)
                setOpen(false)
              }}
            >
              {label}
            </button>
          ))}
          <div className="mobile-actions">
            {loggedIn ? (
              <div className="grid grid-cols-3 gap-2 w-full">
                <Button onClick={() => go("dashboard")}>Dashboard</Button>
                <Button variant="secondary" onClick={() => go("chat")}>
                  Chat (2)
                </Button>
                <Button variant="secondary" onClick={() => go("live")}>
                  Live 🔴
                </Button>
              </div>
            ) : (
              <>
                <Button variant="secondary" onClick={() => go("login")}>
                  Login
                </Button>
                <Button onClick={() => go("register")}>Register</Button>
              </>
            )}
          </div>
        </nav>
        <div className="nav-actions">
          <button
            className="cart-button"
            aria-label="Cart"
            onClick={() => go("cart")}
          >
            <ShoppingBag size={21} />
            <b>{cartCount}</b>
          </button>
          {loggedIn ? (
            <div className="flex items-center gap-2">
              <button
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                onClick={() => go("chat")}
                title="Counsellor Chat (2 unread)"
              >
                <span>Chat</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  2
                </span>
              </button>
              <button
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-red-200 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 transition"
                onClick={() => go("live")}
                title="Live Sessions"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>Live</span>
              </button>
              <button
                className="avatar"
                onClick={() => go("dashboard")}
                title="Student Portal (Aarav Kumar)"
              >
                AK
              </button>
            </div>
          ) : (
            <>
              <Button variant="ghost" onClick={() => go("login")}>
                Login
              </Button>
              <Button onClick={() => go("register")}>Register</Button>
            </>
          )}
          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
