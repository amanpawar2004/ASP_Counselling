import { Download, Eye, FileText, LockKeyhole } from "lucide-react"
import { Button } from "../../components/common/Button"
import { DashContent } from "../../components/layout/DashContent"

export type CollegesPageProps = {
  toast: (s: string) => void
}

export function CollegesPage({ toast }: CollegesPageProps) {
  return (
    <DashContent
      title="My College Lists"
      copy="Personalised college recommendations shared by your counsellor."
    >
      <div className="college-list">
        <article>
          <div className="pdf-preview">
            <FileText />
          </div>
          <div>
            <span className="status active">New</span>
            <h3>Aarav’s Engineering College Shortlist</h3>
            <p>PDF · 2.4 MB · Shared on 14 Jun 2025</p>
          </div>
          <div>
            <Button variant="secondary">
              <Eye size={17} /> View
            </Button>
            <Button onClick={() => toast("Downloading college list...")}>
              <Download size={17} /> Download PDF
            </Button>
          </div>
        </article>
        <article className="locked">
          <div className="pdf-preview">
            <LockKeyhole />
          </div>
          <div>
            <h3>Scholarship Opportunity List</h3>
            <p>Unlock this personalised list with Scholarship Help.</p>
          </div>
          <Button variant="secondary">View Service</Button>
        </article>
      </div>
    </DashContent>
  )
}
