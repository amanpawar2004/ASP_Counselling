import { Award, ShieldCheck } from "lucide-react"
import { partnerLogos } from "../../data"

export function PartnerLogos() {
  return (
    <section className="partner-strip">
      <div className="partner-strip-inner">
        <div className="partner-strip-heading">
          <ShieldCheck
            size={18}
            className="text-amber-500 inline-block mr-1.5"
          />
          <span>Trusted by aspirants accepted at India's premier colleges</span>
        </div>
        <div className="partner-logos-grid">
          {partnerLogos.map((item) => (
            <div key={item.name} className="partner-logo-item">
              <span className="partner-logo-mark">{item.mark}</span>
              <div className="partner-logo-info">
                <strong>{item.name}</strong>
                <small>{item.tag}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="partner-strip-footer">
          <span>
            <Award size={13} className="inline mr-1" /> Over 500+ successful
            admissions across top state & central universities
          </span>
        </div>
      </div>
    </section>
  )
}
