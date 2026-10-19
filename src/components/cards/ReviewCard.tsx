import { Star } from "lucide-react"
import type { Review } from "../../types"

export type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} size={16} fill="currentColor" />
        ))}
      </div>
      <p>“{review.text}”</p>
      <div className="reviewer">
        <span>{review.photo}</span>
        <div>
          <strong>{review.name}</strong>
          <small>
            {review.course} · Admitted to {review.college}
          </small>
        </div>
      </div>
    </article>
  )
}
