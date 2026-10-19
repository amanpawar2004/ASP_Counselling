import { useState } from "react"
import { LogOut } from "lucide-react"
import { Button } from "../../components/common/Button"
import { DashContent } from "../../components/layout/DashContent"
import type { Page } from "../../types"

export type SettingsPageProps = {
  go: (p: Page) => void
  toast: (s: string) => void
}

export function SettingsPage({ go, toast }: SettingsPageProps) {
  const [confirm, setConfirm] = useState(false)

  return (
    <DashContent
      title="Settings"
      copy="Control notifications and account preferences."
    >
      <section className="dash-panel settings-list">
        <h3>Notification preferences</h3>
        {[
          ["Session reminders", "Get notified 24 hours before a session"],
          ["Application deadlines", "Never miss an important college deadline"],
          ["Tips and updates", "Occasional admission insights and news"],
        ].map(([a, b], i) => (
          <label key={a}>
            <span>
              <strong>{a}</strong>
              <small>{b}</small>
            </span>
            <input type="checkbox" defaultChecked={i < 2} />
          </label>
        ))}
        <Button onClick={() => toast("Preferences saved")}>
          Save Preferences
        </Button>
      </section>
      <section className="dash-panel danger-zone">
        <h3>Sign out</h3>
        <p>You’ll need your email and password to sign back in.</p>
        <Button variant="danger" onClick={() => setConfirm(true)}>
          <LogOut /> Logout
        </Button>
      </section>
      {confirm && (
        <div className="modal-backdrop">
          <div className="modal">
            <span className="danger-icon">
              <LogOut />
            </span>
            <h3>Log out of NextStep?</h3>
            <p>You can sign back in anytime to continue your journey.</p>
            <div>
              <Button variant="secondary" onClick={() => setConfirm(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => go("home")}>
                Yes, Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </DashContent>
  )
}
