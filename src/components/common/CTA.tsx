import { ArrowRight } from "lucide-react"
import type { Page } from "../../types"
import { Button } from "./Button"

export type CTAProps = {
  go: (p: Page) => void
}

export function CTA({ go }: CTAProps) {
  return (
    <section className="cta-banner">
      <div>
        <span>Ready when you are</span>
        <h2>Make your next step the right one.</h2>
        <p>Start with a free 15-minute call. No pressure, just clarity.</p>
      </div>
      <Button onClick={() => go("contact")}>
        Book a Free Call <ArrowRight />
      </Button>
    </section>
  )
}
