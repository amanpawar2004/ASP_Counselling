import { ServiceCard } from "../components/cards/ServiceCard"
import { FAQ } from "../components/common/FAQ"
import { PageHero } from "../components/common/PageHero"
import { SectionTitle } from "../components/common/SectionTitle"
import { services } from "../data"
import type { Service } from "../types"

export type ServicesPageProps = {
  add: (s: Service) => void
  buy: (s: Service) => void
}

export function ServicesPage({ add, buy }: ServicesPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Services & pricing"
        title="Choose the support you need."
        copy="Simple, transparent pricing. Expert guidance. No hidden costs or unnecessary packages."
      />
      <section className="section">
        <div className="service-grid">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              service={s}
              add={() => add(s)}
              buy={() => buy(s)}
            />
          ))}
        </div>
      </section>
      <section className="section blue-wash comparison">
        <SectionTitle
          eyebrow="Compare options"
          title="Find your best fit"
          centered
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>What’s included</th>
                <th>Personal</th>
                <th>Application</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1:1 counselling", "✓", "—", "✓"],
                ["College shortlist", "—", "—", "✓"],
                ["Application review", "—", "✓", "✓"],
                ["SOP review", "—", "—", "✓"],
                ["Chat support", "7 days", "14 days", "30 days"],
              ].map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={c + i}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section faq-section">
        <SectionTitle eyebrow="Service FAQs" title="Before you choose" />
        <FAQ
          items={[
            [
              "Can I switch services later?",
              "Yes. You can upgrade to the Complete Package and we will adjust the difference.",
            ],
            [
              "How soon can I book a session?",
              "Most students find a slot within 2–3 working days.",
            ],
            [
              "Are payments refundable?",
              "Unused services can be cancelled within 7 days, subject to our refund policy.",
            ],
          ]}
        />
      </section>
    </>
  )
}
