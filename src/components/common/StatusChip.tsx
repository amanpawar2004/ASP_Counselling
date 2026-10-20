export type StatusChipProps = {
  status: "Paid" | "Pending" | "Failed" | "Active" | "Inactive" | "Live" | "Approved" | "Hidden" | "Delivered" | "Draft" | string
  className?: string
  pulsing?: boolean
}

export function StatusChip({
  status,
  className = "",
  pulsing = false,
}: StatusChipProps) {
  const norm = status.toLowerCase()

  let chipClass = "chip-default"
  if (
    norm === "paid" ||
    norm === "active" ||
    norm === "approved" ||
    norm === "delivered"
  ) {
    chipClass = "chip-paid"
  } else if (
    norm === "pending" ||
    norm === "draft" ||
    norm === "upcoming" ||
    norm === "scheduled"
  ) {
    chipClass = "chip-pending"
  } else if (
    norm === "failed" ||
    norm === "live" ||
    norm === "inactive" ||
    norm === "hidden"
  ) {
    chipClass = "chip-failed"
  }

  return (
    <span className={`chip-status ${chipClass} ${className}`}>
      {(norm === "live" || pulsing) && <span className="live-pulse-dot" />}
      {status}
    </span>
  )
}
