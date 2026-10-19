import { ReactNode } from "react"
import { LockKeyhole } from "lucide-react"

export type OrderSummaryProps = {
  subtotal: number
  action: ReactNode
}

export function OrderSummary({ subtotal, action }: OrderSummaryProps) {
  const gst = Math.round(subtotal * 0.18)
  return (
    <aside className="order-summary">
      <h3>Order summary</h3>
      <p>
        <span>Subtotal</span>
        <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
      </p>
      <p className="success">
        <span>Discount</span>
        <strong>− ₹0</strong>
      </p>
      <p>
        <span>GST (18%)</span>
        <strong>₹{gst.toLocaleString("en-IN")}</strong>
      </p>
      <div className="total">
        <span>Total</span>
        <strong>₹{(subtotal + gst).toLocaleString("en-IN")}</strong>
      </div>
      {action}
      <small>
        <LockKeyhole size={14} /> Secure, encrypted checkout
      </small>
    </aside>
  )
}
