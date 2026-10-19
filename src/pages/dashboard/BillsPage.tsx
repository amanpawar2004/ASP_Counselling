import { useState } from "react"
import { Download, Eye, X } from "lucide-react"
import { Button } from "../../components/common/Button"
import { Logo } from "../../components/common/Logo"
import { DashContent } from "../../components/layout/DashContent"

export type BillsPageProps = {
  toast: (s: string) => void
}

export function BillsPage({ toast }: BillsPageProps) {
  const [invoice, setInvoice] = useState<string[] | null>(null)

  return (
    <DashContent
      title="Bills & Orders"
      copy="View payments, order status and download your invoices."
    >
      <div className="dash-panel bills-table">
        <div className="invoice-row head">
          <span>Invoice no.</span>
          <span>Date</span>
          <span>Service</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Invoice</span>
        </div>
        {[
          ["INV-01842", "12 Jun 2025", "Complete Package", "₹5,310", "Paid"],
          ["INV-01798", "02 Jun 2025", "SOP Review", "₹944", "Paid"],
          ["INV-01662", "18 May 2025", "College List", "₹1,180", "Failed"],
        ].map((r) => (
          <div className="invoice-row" key={r[0]}>
            {r.slice(0, 4).map((x, i) => (
              <span
                key={x}
                data-label={["Invoice", "Date", "Service", "Amount"][i]}
              >
                {x}
              </span>
            ))}
            <span data-label="Status">
              <b className={`status ${r[4].toLowerCase()}`}>{r[4]}</b>
            </span>
            <span>
              <button onClick={() => setInvoice(r)}>
                <Eye /> View
              </button>
            </span>
          </div>
        ))}
      </div>
      {invoice && (
        <div className="modal-backdrop">
          <div className="modal invoice-modal">
            <button className="modal-close" onClick={() => setInvoice(null)}>
              <X />
            </button>
            <Logo go={() => setInvoice(null)} />
            <p className="eyebrow">Invoice detail</p>
            <h3>{invoice[0]}</h3>
            <div className="receipt">
              <p>
                <span>Date</span>
                <strong>{invoice[1]}</strong>
              </p>
              <p>
                <span>Service</span>
                <strong>{invoice[2]}</strong>
              </p>
              <p>
                <span>Status</span>
                <strong>{invoice[4]}</strong>
              </p>
              <p>
                <span>Total paid</span>
                <strong>{invoice[3]}</strong>
              </p>
            </div>
            <Button
              className="full"
              onClick={() => toast("Downloading invoice...")}
            >
              <Download /> Download Invoice PDF
            </Button>
          </div>
        </div>
      )}
    </DashContent>
  )
}
