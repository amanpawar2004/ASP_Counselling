import { useState } from "react"
import { Send, Star } from "lucide-react"
import { ReviewCard } from "../components/cards/ReviewCard"
import { Button } from "../components/common/Button"
import { PageHero } from "../components/common/PageHero"
import { reviews } from "../data"

export function ReviewsPage() {
  const [filter, setFilter] = useState("All courses")
  return (
    <>
      <PageHero
        eyebrow="Student reviews"
        title="Their success says it best."
        copy="Honest stories from students who made informed choices and found their right-fit college."
      />
      <section className="section">
        <div className="rating-summary">
          <div>
            <strong>4.9</strong>
            <span className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} fill="currentColor" />
              ))}
            </span>
            <p>Based on 286 verified reviews</p>
          </div>
          <div className="rating-bars">
            {[5, 4, 3].map((n, i) => (
              <p key={n}>
                <span>{n} stars</span>
                <i>
                  <b style={{ width: `${[91, 7, 2][i]}%` }} />
                </i>
                <small>{[91, 7, 2][i]}%</small>
              </p>
            ))}
          </div>
        </div>
        <div className="filter-row">
          <div>
            {["All courses", "Engineering", "MBA", "Design", "Commerce"].map(
              (f) => (
                <button
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                  key={f}
                >
                  {f}
                </button>
              ),
            )}
          </div>
          <Button>
            <Send size={17} /> Submit your review
          </Button>
        </div>
        <div className="reviews-grid expanded">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={r.name + i} review={r} />
          ))}
        </div>
      </section>
    </>
  )
}
