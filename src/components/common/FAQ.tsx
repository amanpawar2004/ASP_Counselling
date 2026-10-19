import { useState } from "react"
import { ChevronDown } from "lucide-react"

export type FAQProps = {
  items: [string, string][]
}

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <div className="faq" key={q}>
          <button onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{q}</span>
            <ChevronDown className={open === i ? "rotated" : ""} />
          </button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </div>
  )
}
