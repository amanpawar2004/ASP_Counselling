import {
  BookOpen,
  Check,
  Clock3,
  Download,
  MessageSquare,
  Play,
  Radio,
  Sparkles,
  UserRound,
} from "lucide-react"
import { Button } from "../../components/common/Button"
import { DashContent } from "../../components/layout/DashContent"
import type { Page } from "../../types"

export type DashboardPageProps = {
  go?: (p: Page) => void
}

export function DashboardPage({ go }: DashboardPageProps) {
  return (
    <DashContent
      title="Good morning, Aarav!"
      copy="Here’s what’s happening with your admission journey."
    >
      {/* Live Now Alert Banner */}
      <div className="p-4 bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl mb-6 shadow-md flex items-center justify-between flex-wrap gap-4 border border-blue-900/50">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center">
            <Radio size={20} className="animate-pulse" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Live Now
              </span>
              <strong className="text-sm">
                CAP Round Option Form Strategy 2025
              </strong>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Hosted by Neha Kapoor · 48 students currently in room
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary btn-sm bg-red-600 hover:bg-red-700 text-white font-bold"
          onClick={() => go && go("live-room")}
        >
          <Play size={14} fill="currentColor" /> Join Live Room
        </button>
      </div>

      <div className="quick-grid">
        {[
          [
            BookOpen,
            "Courses purchased",
            "2",
            "1 active",
            () => go && go("courses"),
          ],
          [
            Clock3,
            "Upcoming sessions",
            "1",
            "Tomorrow, 4:00 PM",
            () => go && go("live"),
          ],
          [
            Download,
            "Downloads available",
            "3",
            "College lists & invoices",
            () => go && go("bills"),
          ],
        ].map(([I, l, v, s, onClick]) => {
          const Icon = I as typeof BookOpen
          return (
            <article
              key={l as string}
              className="hover-lift cursor-pointer"
              onClick={onClick as any}
            >
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
            <h3>Upcoming 1:1 Session</h3>
            <button onClick={() => go && go("live")}>View all</button>
          </div>
          <div className="session-card">
            <div className="date-block">
              <strong>18</strong>
              <span>JUN</span>
            </div>
            <div>
              <h4>Personal Counselling & Shortlist Review</h4>
              <p>
                <Clock3 /> Tomorrow at 4:00 PM · 60 min
              </p>
              <p>
                <UserRound /> With Neha Kapoor (Lead Counsellor)
              </p>
            </div>
            <Button onClick={() => go && go("chat")}>
              <MessageSquare size={16} /> Open Chat
            </Button>
          </div>

          {/* Quick Shortlist Review Card */}
          <div className="mt-4 p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Sparkles size={18} />
              </span>
              <div className="text-xs">
                <strong className="block text-slate-900">
                  Your Maharashtra Tier-1 Shortlist is Ready!
                </strong>
                <span className="text-slate-500">
                  6 matched colleges categorized into Dream, Target & Safe.
                </span>
              </div>
            </div>
            <button
              className="btn btn-secondary btn-sm text-xs whitespace-nowrap"
              onClick={() => go && go("colleges")}
            >
              View Shortlist
            </button>
          </div>
        </section>

        <section className="dash-panel">
          <div className="panel-title">
            <h3>Recent activity</h3>
          </div>
          {[
            [
              "College shortlist added by Neha",
              "2 hours ago",
              () => go && go("colleges"),
            ],
            [
              "Live session attended: Cutoff Analysis",
              "Yesterday",
              () => go && go("live"),
            ],
            [
              "Tax Invoice INV-01842 generated",
              "12 Jun 2025",
              () => go && go("bills"),
            ],
          ].map(([a, b, onClick]) => (
            <div
              className="activity hover:bg-slate-50 p-2 rounded-lg cursor-pointer transition"
              key={a as string}
              onClick={onClick as any}
            >
              <span>
                <Check />
              </span>
              <div>
                <strong>{a as string}</strong>
                <small>{b as string}</small>
              </div>
            </div>
          ))}
        </section>
      </div>
    </DashContent>
  )
}
