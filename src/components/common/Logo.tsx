import { GraduationCap } from "lucide-react"
import type { Page } from "../../types"

export type LogoProps = {
  go: (p: Page) => void
}

export function Logo({ go }: LogoProps) {
  return (
    <button className="logo" onClick={() => go("home")}>
      <span className="logo-mark">
        <GraduationCap size={22} />
      </span>
      <span>
        Next<span>Step</span>
        <small>Admissions</small>
      </span>
    </button>
  )
}
