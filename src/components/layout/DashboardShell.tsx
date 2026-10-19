import { ReactNode } from "react"
import { Bell, LogOut, Search, Settings } from "lucide-react"
import { dashNav } from "../../data"
import type { Page } from "../../types"
import { Logo } from "../common/Logo"

export type DashboardShellProps = {
  page: Page
  go: (p: Page) => void
  children: ReactNode
}

export function DashboardShell({ page, go, children }: DashboardShellProps) {
  return (
    <div className="dashboard-shell">
      <aside className="dash-sidebar">
        <Logo go={go} />
        <nav>
          {dashNav.map(([p, label, I]) => (
            <button
              className={page === p ? "active" : ""}
              onClick={() => go(p)}
              key={p}
            >
              <I />
              {label}
            </button>
          ))}
          <button
            className={page === "settings" ? "active" : ""}
            onClick={() => go("settings")}
          >
            <Settings />
            Settings
          </button>
        </nav>
        <button onClick={() => go("home")}>
          <LogOut /> Logout
        </button>
      </aside>
      <main className="dash-main">
        <header>
          <div>
            <Search />
            <input placeholder="Search your dashboard" />
          </div>
          <button>
            <Bell />
            <b />
          </button>
          <button className="avatar">AK</button>
        </header>
        {children}
      </main>
      <nav className="bottom-tabs">
        {dashNav.map(([p, label, I]) => (
          <button
            className={page === p ? "active" : ""}
            onClick={() => go(p)}
            key={p}
          >
            <I />
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}
