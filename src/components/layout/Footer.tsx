import { ArrowRight } from "lucide-react"
import type { Page } from "../../types"
import { Logo } from "../common/Logo"

export type FooterProps = {
  go: (p: Page) => void
}

export function Footer({ go }: FooterProps) {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Logo go={go} />
          <p>
            Clear guidance. Confident choices.
            <br />A future built around you.
          </p>
          <div className="socials">
            <span>in</span>
            <span>f</span>
            <span>ig</span>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          {[
            ["About us", "about"],
            ["Services", "services"],
            ["Student reviews", "reviews"],
            ["Contact", "contact"],
          ].map(([a, b]) => (
            <button key={a} onClick={() => go(b as Page)}>
              {a}
            </button>
          ))}
        </div>
        <div>
          <h4>Support</h4>
          <button>FAQs</button>
          <button>Privacy policy</button>
          <button>Terms</button>
          <button>Refund policy</button>
        </div>
        <div>
          <h4>Stay in the loop</h4>
          <p>Get college tips and deadline reminders.</p>
          <div className="newsletter">
            <input placeholder="Email address" />
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 NextStep Admissions. All rights reserved.{" "}
        <span>Made for ambitious students across India.</span>
      </div>
    </footer>
  )
}
