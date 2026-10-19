import { useState } from "react"
import {
  CreditCard,
  LockKeyhole,
  ReceiptText,
  ShoppingBag,
  WalletCards,
} from "lucide-react"
import { OrderSummary } from "../components/cards/OrderSummary"
import { Button } from "../components/common/Button"
import { Field } from "../components/common/Field"
import { PageHero } from "../components/common/PageHero"
import { services } from "../data"
import type { Page, Service } from "../types"

export type CheckoutPageProps = {
  cart: Service[]
  go: (p: Page) => void
}

export function CheckoutPage({ cart, go }: CheckoutPageProps) {
  const [method, setMethod] = useState("UPI")
  const subtotal = (cart.length ? cart : [services[5]]).reduce(
    (a, b) => a + b.price,
    0,
  )

  return (
    <>
      <PageHero
        eyebrow="Secure checkout"
        title="Complete your purchase."
        copy="Your information is protected with bank-grade encryption."
      />
      <section className="section checkout-layout">
        <div className="checkout-main">
          <div className="panel">
            <h3>
              <span>1</span> Billing details
            </h3>
            <div className="form-grid">
              <Field label="Full name" placeholder="Aarav Kumar" />
              <Field label="Email" placeholder="aarav@email.com" />
              <Field label="Phone" placeholder="+91 98765 43210" />
            </div>
          </div>
          <div className="panel">
            <h3>
              <span>2</span> Payment method
            </h3>
            <div className="payment-tabs">
              {[
                ["UPI", WalletCards],
                ["Card", CreditCard],
                ["Net Banking", ReceiptText],
                ["Wallet", ShoppingBag],
              ].map(([m, I]) => {
                const Icon = I as typeof CreditCard
                return (
                  <button
                    className={method === m ? "active" : ""}
                    onClick={() => setMethod(m as string)}
                    key={m as string}
                  >
                    <Icon />
                    {m as string}
                  </button>
                )
              })}
            </div>
            {method === "UPI" ? (
              <Field label="UPI ID" placeholder="name@bank" />
            ) : method === "Card" ? (
              <div className="form-grid">
                <Field label="Card number" placeholder="1234 5678 9012 3456" />
                <Field label="Expiry" placeholder="MM / YY" />
                <Field label="CVV" placeholder="•••" />
              </div>
            ) : (
              <Field label={`Choose ${method}`}>
                <select>
                  <option>Select an option</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                </select>
              </Field>
            )}
            <button className="prototype-link" onClick={() => go("failed")}>
              Preview failed payment state
            </button>
          </div>
        </div>
        <OrderSummary
          subtotal={subtotal}
          action={
            <Button className="full" onClick={() => go("success")}>
              Pay ₹{Math.round(subtotal * 1.18).toLocaleString("en-IN")}{" "}
              <LockKeyhole size={16} />
            </Button>
          }
        />
      </section>
    </>
  )
}
