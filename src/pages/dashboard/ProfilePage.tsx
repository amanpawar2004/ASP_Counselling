import { Upload } from "lucide-react"
import { Button } from "../../components/common/Button"
import { Field } from "../../components/common/Field"
import { DashContent } from "../../components/layout/DashContent"

export type ProfilePageProps = {
  toast: (s: string) => void
}

export function ProfilePage({ toast }: ProfilePageProps) {
  return (
    <DashContent
      title="My Profile"
      copy="Keep your details current so we can personalise your guidance."
    >
      <section className="dash-panel profile-panel">
        <div className="profile-upload">
          <span className="avatar large">AK</span>
          <div>
            <h3>Aarav Kumar</h3>
            <p>Student · Joined June 2025</p>
            <Button variant="secondary">
              <Upload size={16} /> Upload photo
            </Button>
          </div>
        </div>
        <div className="form-grid">
          <Field label="Full name">
            <input defaultValue="Aarav Kumar" />
          </Field>
          <Field label="Email">
            <input defaultValue="aarav@email.com" />
          </Field>
          <Field label="Phone">
            <input defaultValue="+91 98765 43210" />
          </Field>
          <Field label="Class / Stream">
            <select>
              <option>Class 12 — Science</option>
            </select>
          </Field>
          <Field label="City">
            <input defaultValue="Bengaluru" />
          </Field>
          <Field label="Preferred course">
            <input defaultValue="Computer Science" />
          </Field>
          <Field label="College budget">
            <select>
              <option>₹5–10 lakh / year</option>
            </select>
          </Field>
        </div>
        <div className="form-actions">
          <Button variant="secondary">Cancel</Button>
          <Button onClick={() => toast("Profile updated successfully")}>
            Save Changes
          </Button>
        </div>
      </section>
      <section className="dash-panel password-section">
        <h3>Change password</h3>
        <div className="form-grid">
          <Field label="Current password" type="password" />
          <Field label="New password" type="password" />
        </div>
        <Button variant="secondary">Update Password</Button>
      </section>
    </DashContent>
  )
}
