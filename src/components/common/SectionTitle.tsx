export type SectionTitleProps = {
  eyebrow: string
  title: string
  copy?: string
  centered?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  copy,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}
