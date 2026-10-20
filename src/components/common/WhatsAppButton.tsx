import { useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState("")

  const handleSend = () => {
    const text = encodeURIComponent(
      msg || "Hello NextStep, I need guidance for college admissions 2025.",
    )
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank")
    setOpen(false)
    setMsg("")
  }

  return (
    <aside className="whatsapp-floating-wrapper" aria-label="WhatsApp Support">
      {open && (
        <div className="whatsapp-popup fade-up">
          <div className="whatsapp-popup-header">
            <div className="whatsapp-avatar-info">
              <span className="whatsapp-avatar">NS</span>
              <div>
                <strong>NextStep Admissions</strong>
                <small>Typically replies within 15 minutes</small>
              </div>
            </div>
            <button
              className="whatsapp-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              <X size={16} />
            </button>
          </div>
          <div className="whatsapp-popup-body">
            <div className="whatsapp-bubble">
              <p>
                Hi there! 👋 How can we help you choose your dream college
                today?
              </p>
              <span className="whatsapp-time">Just now</span>
            </div>
          </div>
          <div className="whatsapp-popup-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} aria-label="Send WhatsApp message">
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      <button
        className="whatsapp-btn-trigger hover-lift"
        onClick={() => setOpen(!open)}
        title="Chat with an Admission Counsellor on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-pulse-ring" />
        <MessageCircle size={26} fill="currentColor" />
        <span className="whatsapp-tooltip">Chat with an Advisor</span>
      </button>
    </aside>
  )
}
