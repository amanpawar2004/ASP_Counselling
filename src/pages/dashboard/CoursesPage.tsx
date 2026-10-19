import { BookOpen, Clock3 } from "lucide-react"
import { Button } from "../../components/common/Button"
import { DashContent } from "../../components/layout/DashContent"
import type { Page } from "../../types"

export type CoursesPageProps = {
  go: (p: Page) => void
}

export function CoursesPage({ go }: CoursesPageProps) {
  return (
    <DashContent
      title="My Courses"
      copy="Your purchased services, sessions and progress in one place."
    >
      <div className="course-list">
        {[
          ["Personal Counselling", "Active", "18 Jun 2025 · 4:00 PM"],
          [
            "Complete Application Guidance",
            "Scheduled",
            "22 Jun 2025 · 11:00 AM",
          ],
          ["SOP / Essay Review", "Completed", "Completed on 8 Jun 2025"],
        ].map(([title, status, date], i) => (
          <article className="course-card" key={title}>
            <div className="course-cover">
              <span>{i + 1}</span>
              <BookOpen />
            </div>
            <div className="course-info">
              <span className={`status ${status.toLowerCase()}`}>{status}</span>
              <h3>{title}</h3>
              <p>Purchased 10 Jun 2025</p>
              <div>
                <Clock3 /> {date}
              </div>
            </div>
            <Button
              variant={i === 0 ? "primary" : "secondary"}
              onClick={() => i === 0 && go("dashboard")}
            >
              {i === 0 ? "Join Session" : "View Details"}
            </Button>
          </article>
        ))}
      </div>
    </DashContent>
  )
}
