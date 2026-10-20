import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Play,
  ShieldCheck,
  Star,
  Target,
  UsersRound,
} from "lucide-react"
import { ServiceCard } from "../components/cards/ServiceCard"
import { ReviewCard } from "../components/cards/ReviewCard"
import { Button } from "../components/common/Button"
import { CTA } from "../components/common/CTA"
import { FAQ } from "../components/common/FAQ"
import { PartnerLogos } from "../components/common/PartnerLogos"
import { SectionTitle } from "../components/common/SectionTitle"
import { heroImage, reviews, services } from "../data"
import type { Page } from "../types"

export type HomePageProps = {
  go: (p: Page) => void
}

export function HomePage({ go }: HomePageProps) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="pill">
            <Star size={14} fill="currentColor" /> Trusted by 500+ students
          </span>
          <h1>
            Your dream college.
            <br />
            <em>A clear path to get there.</em>
          </h1>
          <p>
            Personalised college admission guidance for students who want
            confident choices, stronger applications and less stress.
          </p>
          <div className="hero-actions">
            <Button onClick={() => go("services")}>
              Explore Services <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" onClick={() => go("contact")}>
              <Play size={17} /> Book Free Call
            </Button>
          </div>
          <div className="trust-row">
            <span>
              <strong>500+</strong> Students guided
            </span>
            <span>
              <strong>50+</strong> College partners
            </span>
            <span>
              <strong>
                4.9 <Star size={13} fill="currentColor" />
              </strong>{" "}
              Average rating
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="shape shape-one" />
          <div className="shape shape-two" />
          <img
            src={heroImage}
            alt="Students studying together on a university campus"
          />
          <div className="floating-card fc-one">
            <CheckCircle2 />{" "}
            <span>
              <strong>Application ready!</strong>
              <small>Reviewed by your counsellor</small>
            </span>
          </div>
          <div className="floating-card fc-two">
            <span className="avatar-stack">AS</span>
            <span>
              <strong>1:1 guidance</strong>
              <small>From admission experts</small>
            </span>
          </div>
        </div>
      </section>
      <PartnerLogos />
      <section className="stats">
        <div>
          <strong>94%</strong>
          <span>Dream college success</span>
        </div>
        <div>
          <strong>4.9/5</strong>
          <span>Student satisfaction</span>
        </div>
        <div>
          <strong>8+ yrs</strong>
          <span>Counselling experience</span>
        </div>
        <div>
          <strong>25+</strong>
          <span>Courses covered</span>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="Our services"
          title="Expert help for every admission milestone"
          copy="Choose focused support for one step, or let us guide your complete journey."
          centered
        />
        <div className="service-grid preview">
          {services.slice(0, 3).map((s) => (
            <ServiceCard
              key={s.title}
              service={s}
              add={() => go("cart")}
              buy={() => go("checkout")}
            />
          ))}
        </div>
        <div className="center-action">
          <Button variant="secondary" onClick={() => go("services")}>
            View all services <ArrowRight size={17} />
          </Button>
        </div>
      </section>
      <section className="section blue-wash">
        <SectionTitle
          eyebrow="Why NextStep"
          title="Advice that puts you first"
          centered
        />
        <div className="feature-grid">
          {[
            [
              Target,
              "Truly personalised",
              "Recommendations based on your interests, scores and ambitions.",
            ],
            [
              UsersRound,
              "Real admission experts",
              "Experienced counsellors who know the process inside out.",
            ],
            [
              ShieldCheck,
              "Honest, unbiased advice",
              "No hidden college commissions—your goals come first.",
            ],
            [
              Clock3,
              "Support that stays",
              "Questions answered before, during and after applications.",
            ],
          ].map(([I, t, d]) => {
            const Icon = I as typeof Target
            return (
              <div key={t as string}>
                <span>
                  <Icon />
                </span>
                <h3>{t as string}</h3>
                <p>{d as string}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="How it works"
          title="Four simple steps to clarity"
          centered
        />
        <div className="steps">
          {[
            [
              "01",
              "Tell us about you",
              "Share your goals, interests and current academic profile.",
            ],
            [
              "02",
              "Meet your counsellor",
              "Get matched with an expert for a one-to-one session.",
            ],
            [
              "03",
              "Build your roadmap",
              "Receive a clear college shortlist and application plan.",
            ],
            [
              "04",
              "Apply with confidence",
              "Get support until every form is submitted and tracked.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section blue-wash reviews-section">
        <SectionTitle
          eyebrow="Student stories"
          title="Dreams turned into acceptance letters"
          copy="Real outcomes from students who found their way with NextStep."
        />
        <div className="reviews-grid">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>
      <section className="section faq-section">
        <SectionTitle
          eyebrow="Questions, answered"
          title="Everything you may want to know"
        />
        <FAQ
          items={[
            [
              "How does online counselling work?",
              "Choose a service, book a convenient time and meet your counsellor on a secure video call. You will receive all follow-up resources in your dashboard.",
            ],
            [
              "Can you guarantee admission?",
              "No ethical counsellor can guarantee admission. We improve your strategy and application quality to maximise your chances.",
            ],
            [
              "Which boards and streams do you support?",
              "We support CBSE, ICSE and state boards across Science, Commerce, Humanities and creative pathways.",
            ],
          ]}
        />
      </section>
      <CTA go={go} />
    </>
  )
}
