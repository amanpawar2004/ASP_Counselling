export type PageHeroProps = {
  eyebrow: string
  title: string
  copy: string
}

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="page-hero">
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  )
}
