import { useState } from "react"
import {
  Bell,
  Check,
  Clock3,
  Lock,
  Play,
  Radio,
  UserRound,
  Video,
} from "lucide-react"
import { Button } from "../../components/common/Button"
import { initialLiveSessions } from "../../data"
import type { LiveSession, Page } from "../../types"

export type LiveSessionsPageProps = {
  go: (p: Page) => void
  toast?: (s: string) => void
  userServices?: string[]
}

export function LiveSessionsPage({
  go,
  toast,
  userServices = ["Complete Package"],
}: LiveSessionsPageProps) {
  const [reminders, setReminders] = useState<string[]>([])
  const [sessions] = useState<LiveSession[]>(initialLiveSessions)

  const liveNow = sessions.find((s) => s.status === "live")
  const upcoming = sessions.filter((s) => s.status === "upcoming")
  const recorded = sessions.filter((s) => s.status === "recorded")

  const toggleReminder = (id: string, title: string) => {
    if (reminders.includes(id)) {
      setReminders((prev) => prev.filter((r) => r !== id))
      if (toast) toast(`Reminder cancelled for ${title}`)
    } else {
      setReminders((prev) => [...prev, id])
      if (toast)
        toast(`Reminder set! We will notify you 15 minutes before the session.`)
    }
  }

  // Check if user has unlocked the live now session
  const hasAccessToLive = liveNow
    ? liveNow.serviceRequired === "All Enrolled" ||
      userServices.includes(liveNow.serviceRequired)
    : false

  return (
    <div className="live-module-container fade-up">
      {/* Live Now Card */}
      {liveNow && (
        <section className="live-now-banner">
          <div className="live-now-header">
            <div className="live-badge-group">
              <span className="live-badge pulse-red">
                <span className="live-dot" /> LIVE NOW
              </span>
              <span className="viewer-counter">
                <Radio size={14} className="text-red-500 animate-pulse" />
                <strong>{liveNow.viewers}</strong> students watching
              </span>
            </div>
            <span className="duration-tag">
              {liveNow.duration} Interactive Room
            </span>
          </div>

          <div className="live-now-content">
            <div>
              <h2>{liveNow.title}</h2>
              <p className="live-description">{liveNow.description}</p>
              <div className="host-info-row">
                <span className="host-avatar">NK</span>
                <div>
                  <strong>{liveNow.host}</strong>
                  <small>{liveNow.hostRole}</small>
                </div>
              </div>
            </div>

            <div className="live-action-box">
              {hasAccessToLive ? (
                <button
                  className="btn btn-primary join-live-btn hover-lift"
                  onClick={() => go("live-room")}
                >
                  <Play size={18} fill="currentColor" /> Join Live Room
                </button>
              ) : (
                <div className="locked-box">
                  <div className="lock-icon">
                    <Lock size={20} />
                  </div>
                  <span>Requires {liveNow.serviceRequired}</span>
                  <Button variant="secondary" onClick={() => go("services")}>
                    Buy to Unlock
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Sessions */}
      <section className="live-section-block">
        <div className="live-section-title">
          <div>
            <h3>Upcoming Live Masterclasses</h3>
            <p>Join interactive Q&A sessions with our top counsellors</p>
          </div>
        </div>

        <div className="upcoming-sessions-grid">
          {upcoming.map((session) => {
            const isReminderSet = reminders.includes(session.id)
            return (
              <div key={session.id} className="upcoming-card hover-lift">
                <div className="upcoming-card-top">
                  <span className="upcoming-time-chip">
                    <Clock3 size={13} /> {session.date} · {session.time}
                  </span>
                  <span className="upcoming-service-chip">
                    {session.serviceRequired}
                  </span>
                </div>

                <h4>{session.title}</h4>
                <p>{session.description}</p>

                <div className="upcoming-card-footer">
                  <div className="upcoming-host">
                    <UserRound size={15} />
                    <span>{session.host}</span>
                  </div>

                  <button
                    className={`btn-reminder ${
                      isReminderSet ? "reminder-active" : ""
                    }`}
                    onClick={() => toggleReminder(session.id, session.title)}
                  >
                    {isReminderSet ? (
                      <>
                        <Check size={14} /> Reminder Set
                      </>
                    ) : (
                      <>
                        <Bell size={14} /> Set Reminder
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Past Recordings */}
      <section className="live-section-block">
        <div className="live-section-title">
          <div>
            <h3>Past Masterclass Recordings</h3>
            <p>Catch up on recorded strategy workshops and document guides</p>
          </div>
        </div>

        <div className="recordings-grid">
          {recorded.map((rec) => (
            <div key={rec.id} className="recording-card hover-lift">
              <div className="recording-thumbnail">
                <div className="play-overlay">
                  <span className="play-circle">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <span className="recording-duration">{rec.duration}</span>
                <span className="video-tag">
                  <Video size={12} /> HD 1080p
                </span>
              </div>

              <div className="recording-meta">
                <h4>{rec.title}</h4>
                <p>{rec.description}</p>
                <div className="recording-footer-row">
                  <small>Recorded on {rec.date}</small>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                      toast && toast(`Loading recording: ${rec.title}`)
                    }
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
