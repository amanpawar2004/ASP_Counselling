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
              <Button onClick={() => go("dashboard")}>Dashboard</Button>
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
            <button className="avatar" onClick={() => go("dashboard")}>
              AK
            </button>
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
