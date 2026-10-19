import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "../components/common/Button"
import { Field } from "../components/common/Field"
import { PageHero } from "../components/common/PageHero"
import { services } from "../data"

export type ContactPageProps = {
  toast: (s: string) => void
}

export function ContactPage({ toast }: ContactPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s talk about your next step."
        copy="Have a question or ready to begin? Send us a note and our team will get back within one working day."
      />
      <section className="section contact-grid">
        <form
          className="panel form-grid"
          onSubmit={(e) => {
            e.preventDefault()
            toast("Message sent successfully")
          }}
        >
          <Field label="Full name" placeholder="Your name" />
          <Field label="Phone number" placeholder="+91 98765 43210" />
          <Field label="Email address" placeholder="you@email.com" />
          <Field label="Class / Stream">
            <select>
              <option>Class 12 — Science</option>
              <option>Class 12 — Commerce</option>
              <option>Undergraduate</option>
            </select>
          </Field>
          <Field label="Service interested in">
            <select>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </Field>
          <label className="field full">
            <span>How can we help?</span>
            <textarea placeholder="Tell us a little about your goals..." />
          </label>
          <Button type="submit" className="full">
            Send Message <Send size={17} />
          </Button>
        </form>
        <aside className="contact-info">
          <div>
            <span className="icon-box">
              <Phone />
            </span>
            <h3>Call us</h3>
            <p>
              +91 98765 43210
              <br />
              <small>Mon–Sat, 9am–7pm</small>
            </p>
          </div>
          <div>
            <span className="icon-box">
              <Mail />
            </span>
            <h3>Email us</h3>
            <p>hello@nextstep.in</p>
          </div>
          <Button className="whatsapp">
            <MessageCircle /> Chat on WhatsApp
          </Button>
          <div>
            <span className="icon-box">
              <MapPin />
            </span>
            <h3>Visit us</h3>
            <p>12, Knowledge Park, Bengaluru, Karnataka 560001</p>
          </div>
          <div className="map">
            <MapPin />
            <span>NextStep Admissions</span>
          </div>
        </aside>
      </section>
    </>
  )
}
