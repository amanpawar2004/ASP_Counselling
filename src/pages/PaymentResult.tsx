import { ArrowRight, Check, Download, X } from "lucide-react"
import { Button } from "../components/common/Button"
import type { Page } from "../types"

export type PaymentResultProps = {
  success: boolean
  go: (p: Page) => void
}

export function PaymentResult({ success, go }: PaymentResultProps) {
  return (
    <section className={`payment-result ${success ? "" : "failure"}`}>
      <span>{success ? <Check /> : <X />}</span>
      <p className="eyebrow">
        {success ? "Payment successful" : "Payment failed"}
      </p>
      <h1>
        {success ? "You’re all set!" : "We couldn’t process that payment."}
      </h1>
      <p>
        {success
          ? "Your counselling journey starts now. All details are available in your dashboard."
          : "No amount was deducted. Please try again or choose another payment method."}
      </p>
      {success && (
        <div className="receipt">
          <p>
            <span>Order ID</span>
            <strong>#NS-2025-01842</strong>
          </p>
          <p>
            <span>Amount paid</span>
            <strong>₹5,310</strong>
          </p>
          <p>
            <span>Payment method</span>
            <strong>UPI</strong>
          </p>
        </div>
      )}
      <div className="result-actions">
        {success ? (
          <>
            <Button variant="secondary">
              <Download /> Download Invoice
            </Button>
            <Button onClick={() => go("dashboard")}>
              Go to My Dashboard <ArrowRight />
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => go("checkout")}>Try Again</Button>
            <Button variant="secondary" onClick={() => go("checkout")}>
              Choose Another Method
            </Button>
          </>
        )}
      </div>
    </section>
  )
}
