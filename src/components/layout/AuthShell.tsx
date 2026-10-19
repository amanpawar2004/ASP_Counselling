import { ReactNode } from "react"
import { Star } from "lucide-react"

export type AuthShellProps = {
  children: ReactNode
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="auth-shell">
      <div className="auth-art">
        <div>
          <span className="pill light">
            <Star fill="currentColor" size={13} /> 4.9 rated counselling
          </span>
          <h2>One good decision can change everything.</h2>
          <p>Join 500+ students making their next step with confidence.</p>
        </div>
      </div>
      {children}
    </main>
  )
}
