import { Check } from "lucide-react"
import type { Service } from "../../types"
import { Button } from "../common/Button"

export type ServiceCardProps = {
  service: Service
  add: () => void
  buy: () => void
}

export function ServiceCard({ service, add, buy }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <article className="service-card">
      {service.badge && <b className="badge">{service.badge}</b>}
      <span className="icon-box">
        <Icon />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.features.map((f) => (
          <li key={f}>
            <Check size={16} />
            {f}
          </li>
        ))}
      </ul>
      <div className="price">
        <strong>₹{service.price.toLocaleString("en-IN")}</strong>
        <span>one-time</span>
      </div>
      <div className="card-actions">
        <Button variant="secondary" onClick={add}>
          Add to Cart
        </Button>
        <Button onClick={buy}>Buy Now</Button>
      </div>
    </article>
  )
}
