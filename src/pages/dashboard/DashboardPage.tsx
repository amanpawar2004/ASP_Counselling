import {
  BookOpen,
  Check,
  Clock3,
  Download,
  Play,
  UserRound,
} from "lucide-react"
import { Button } from "../../components/common/Button"
import { DashContent } from "../../components/layout/DashContent"

export function DashboardPage() {
  return (
    <DashContent
      title="Good morning, Aarav!"
      copy="Here’s what’s happening with your admission journey."
    >
      <div className="quick-grid">
        {[
          [BookOpen, "Courses purchased", "2", "1 active"],
          [Clock3, "Upcoming sessions", "1", "Tomorrow, 4:00 PM"],
          [Download, "Downloads available", "3", "College lists & invoices"],
        ].map(([I, l, v, s]) => {
          const Icon = I as typeof BookOpen
          return (
            <article key={l as string}>
              <span>
                <Icon />
              </span>
              <div>
                <p>{l as string}</p>
                <strong>{v as string}</strong>
                <small>{s as string}</small>
              </div>
            </article>
          )
        })}
      </div>
      <div className="dash-columns">
        <section className="dash-panel">
          <div className="panel-title">
            <h3>Upcoming session</h3>
            <button>View all</button>
          </div>
          <div className="session-card">
            <div className="date-block">
              <strong>18</strong>
              <span>JUN</span>
            </div>
            <div>
              <h4>Personal Counselling</h4>
              <p>
                <Clock3 /> Tomorrow at 4:00 PM · 60 min
              </p>
              <p>
                <UserRound /> With Neha Kapoor
              </p>
            </div>
            <Button>
              <Play size={16} /> Join Session
            </Button>
          </div>
        </section>
        <section className="dash-panel">
          <div className="panel-title">
            <h3>Recent activity</h3>
          </div>
          {[
            ["College shortlist added", "2 hours ago"],
            ["Session booked", "Yesterday"],
            ["Payment successful", "12 Jun 2025"],
          ].map(([a, b]) => (
            <div className="activity" key={a}>
              <span>
                <Check />
              </span>
              <div>
                <strong>{a}</strong>
                <small>{b}</small>
              </div>
            </div>
          ))}
        </section>
      </div>
    </DashContent>
  )
}
