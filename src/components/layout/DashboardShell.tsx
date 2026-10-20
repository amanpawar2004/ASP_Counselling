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
          {dashNav.map(([p, label, Icon, extra]) => (
            <button
              className={`dash-nav-btn ${page === p ? "active" : ""}`}
              onClick={() => go(p)}
              key={p}
            >
              <span className="icon-with-badge">
                <Icon size={19} />
                {extra?.isLive && <span className="nav-live-dot pulse-red" />}
              </span>
              <span className="nav-label">{label}</span>
              {extra?.badge && (
                <span className="nav-counter-badge">{extra.badge}</span>
              )}
              {extra?.isLive && <span className="nav-live-pill">LIVE</span>}
            </button>
          ))}
          <button
            className={`dash-nav-btn ${page === "settings" ? "active" : ""}`}
            onClick={() => go("settings")}
          >
            <Settings size={19} />
            <span className="nav-label">Settings</span>
          </button>
        </nav>
        <button className="dash-logout-btn" onClick={() => go("home")}>
          <LogOut size={18} /> <span>Sign Out</span>
        </button>
      </aside>

      <main className="dash-main">
        <header>
          <div className="dash-search-box">
            <Search size={16} />
            <input placeholder="Search colleges, orders, webinars..." />
          </div>
          <button
            className="dash-notify-btn"
            title="Notifications"
            onClick={() => go("chat")}
          >
            <Bell size={18} />
            <span className="notify-badge" />
          </button>
          <button
            className="avatar"
            onClick={() => go("profile")}
            title="Aarav Kumar (Profile)"
          >
            AK
          </button>
        </header>
        {children}
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="bottom-tabs">
        {dashNav.slice(0, 5).map(([p, label, Icon, extra]) => (
          <button
            className={`bottom-tab-item ${page === p ? "active" : ""}`}
            onClick={() => go(p)}
            key={p}
          >
            <span className="bottom-tab-icon-wrapper">
              <Icon size={19} />
              {extra?.badge && (
                <span className="bottom-tab-badge">{extra.badge}</span>
              )}
              {extra?.isLive && (
                <span className="bottom-tab-live-dot pulse-red" />
              )}
            </span>
            <span>{label}</span>
          </button>
        ))}
        <button
          className={`bottom-tab-item ${page === "settings" ? "active" : ""}`}
          onClick={() => go("settings")}
        >
          <Settings size={19} />
          <span>More</span>
        </button>
      </nav>
    </div>
  )
}
