import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react"
import { OrderSummary } from "../components/cards/OrderSummary"
import { Button } from "../components/common/Button"
import { PageHero } from "../components/common/PageHero"
import type { Page, Service } from "../types"

export type CartPageProps = {
  cart: Service[]
  remove: (i: number) => void
  go: (p: Page) => void
}

export function CartPage({ cart, remove, go }: CartPageProps) {
  const subtotal = cart.reduce((a, b) => a + b.price, 0)

  if (!cart.length) {
    return (
      <section className="empty-state">
        <span>
          <ShoppingBag />
        </span>
        <h1>Your cart is empty</h1>
        <p>
          Explore our admission support services and find the guidance you need.
        </p>
        <Button onClick={() => go("services")}>Browse Services</Button>
      </section>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Your cart"
        title="Review your choices."
        copy="You’re one step closer to a clearer admission journey."
      />
      <section className="section cart-layout">
        <div>
          <h3>
            {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
          </h3>
          {cart.map((item, i) => {
            const Icon = item.icon
            return (
              <div className="cart-item" key={item.title + i}>
                <span className="icon-box">
                  <Icon />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.features[0]} · One-time purchase</p>
                </div>
                <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                <button onClick={() => remove(i)}>
                  <Trash2 />
                </button>
              </div>
            )
          })}
          <div className="coupon">
            <input placeholder="Coupon code" />
            <Button variant="secondary">Apply</Button>
          </div>
        </div>
        <OrderSummary
          subtotal={subtotal}
          action={
            <Button className="full" onClick={() => go("checkout")}>
              Proceed to Checkout <ArrowRight />
            </Button>
          }
        />
      </section>
    </>
  )
}
