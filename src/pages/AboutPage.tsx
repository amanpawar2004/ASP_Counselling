import { ArrowRight, CheckCircle2, Eye, Target } from "lucide-react"
import { Button } from "../components/common/Button"
import { CTA } from "../components/common/CTA"
import { PageHero } from "../components/common/PageHero"
import { SectionTitle } from "../components/common/SectionTitle"
import { counsellorImage, heroImage } from "../data"
import type { Page } from "../types"

export type AboutPageProps = {
  go: (p: Page) => void
}

export function AboutPage({ go }: AboutPageProps) {
  return (
    <>
      <PageHero
        eyebrow="About NextStep"
        title="Big decisions feel easier with the right guide."
        copy="We help students replace admission anxiety with clarity, confidence and a plan that feels genuinely their own."
      />
      <section className="section split">
        <div>
          <img
            className="story-image"
            src={counsellorImage}
            alt="Students walking on campus"
          />
        </div>
        <div>
          <SectionTitle
            eyebrow="Our story"
            title="Built because students deserve better advice."
          />
          <p>
            NextStep began with one simple belief: college counselling should
            never feel like a sales pitch. It should feel like someone capable
            is listening, asking the right questions, and helping you see what
            is possible.
          </p>
          <p>
            Today, our team combines admissions experience with student-first
            mentoring to guide every choice with honesty and care.
          </p>
          <div className="mini-stats">
            <span>
              <strong>500+</strong> students guided
            </span>
            <span>
              <strong>94%</strong> success rate
            </span>
          </div>
        </div>
      </section>
      <section className="section blue-wash">
        <div className="mission-grid">
          <article>
            <Target />
            <h3>Our mission</h3>
            <p>
              To make expert, unbiased college guidance accessible to every
              ambitious student.
            </p>
          </article>
          <article>
            <Eye />
            <h3>Our vision</h3>
            <p>
              A future where every student chooses their path from
              confidence—not confusion.
            </p>
          </article>
        </div>
      </section>
      <section className="section split reverse">
        <div>
          <span className="pill">Lead counsellor</span>
          <h2>Meet Neha Kapoor</h2>
          <p>
            With 8+ years in admissions and student mentoring, Neha has helped
            hundreds of students find colleges and careers aligned with who they
            really are.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 /> Certified career counsellor
            </li>
            <li>
              <CheckCircle2 /> Former university admissions advisor
            </li>
            <li>
              <CheckCircle2 /> 300+ one-to-one student journeys
            </li>
          </ul>
          <Button onClick={() => go("contact")}>
            Talk to Neha <ArrowRight />
          </Button>
        </div>
        <div className="profile-art">
          <img src={heroImage} alt="Admissions counsellor with students" />
        </div>
      </section>
      <CTA go={go} />
    </>
  )
}
