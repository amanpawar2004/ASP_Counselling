import { useRef, useState, useEffect } from "react"
import {
  FileText,
  Image as ImageIcon,
  Paperclip,
  Phone,
  RotateCcw,
  Send,
  Video,
  X,
} from "lucide-react"
import { initialChatMessages } from "../../data"
import type { ChatMessage } from "../../types"

export type ChatPageProps = {
  toast?: (s: string) => void
}

export function ChatPage({ toast }: ChatPageProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages)
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [attachedFile, setAttachedFile] = useState<{
    name: string
    type: "pdf" | "image"
    size: string
  } | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!inputText.trim() && !attachedFile) return

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "student",
      senderName: "Aarav Kumar",
      senderAvatar: "AK",
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      attachment: attachedFile || undefined,
    }

    setMessages((prev) => [...prev, newMsg])
    setInputText("")
    setAttachedFile(null)

    // Simulate Counsellor Typing & Intelligent Response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const replies = [
        "Great question! I'm adding that to our checklist for tomorrow's 1-on-1 strategy call.",
        "I've received this. Based on previous cutoffs, you have a solid chance in Round 2. Let me prepare the updated PDF.",
        "Got it! Let me review this document with our senior verification team.",
        "Perfect! I will prioritize this in your Dream-Target-Safe shortlist.",
      ]
      const randomReply = replies[Math.floor(Math.random() * replies.length)]
      const replyMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: "admin",
        senderName: "Neha Kapoor",
        senderAvatar: "NK",
        text: randomReply,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
      setMessages((prev) => [...prev, replyMsg])
      if (toast) toast("New message from Neha Kapoor")
    }, 1400)
  }

  const handleAttachDemo = (type: "pdf" | "image") => {
    if (type === "pdf") {
      setAttachedFile({
        name: "12th_HSC_Marksheet_Verification.pdf",
        type: "pdf",
        size: "1.4 MB",
      })
    } else {
      setAttachedFile({
        name: "Scorecard_MHT_CET_2025.png",
        type: "image",
        size: "820 KB",
      })
    }
  }

  return (
    <div className="chat-module-container fade-up">
      <div className="chat-card-shell">
        {/* Chat Top Header */}
        <header className="chat-header">
          <div className="chat-counsellor-profile">
            <div className="chat-avatar-wrapper">
              <span className="chat-avatar-badge">NK</span>
              <span className="online-status-dot pulse" title="Online now" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3>Neha Kapoor</h3>
                <span className="role-tag">Lead Counsellor</span>
              </div>
              <p className="status-caption">
                <span className="green-dot" /> Online | Active now
              </p>
            </div>
          </div>
          <div className="chat-header-actions">
            <button
              className="chat-action-btn"
              onClick={() => toast && toast("Requesting audio callback...")}
              title="Call Counsellor"
            >
              <Phone size={18} />
            </button>
            <button
              className="chat-action-btn"
              onClick={() =>
                toast && toast("Starting instant video consultation...")
              }
              title="Start Video Call"
            >
              <Video size={18} />
            </button>
            <button
              className="chat-action-btn"
              onClick={() => {
                if (messages.length === 0) {
                  setMessages(initialChatMessages)
                } else {
                  setMessages([])
                }
              }}
              title={
                messages.length === 0
                  ? "Restore Demo Messages"
                  : "View Empty State"
              }
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </header>

        {/* Messages Body */}
        <div className="chat-messages-area">
          {messages.length === 0 ? (
            <div className="chat-empty-state">
              <div className="empty-chat-icon">
                <FileText size={36} />
              </div>
              <h4>Start a conversation with your counsellor</h4>
              <p>
                Ask about cutoffs, admission roadmaps, document verification, or
                your Dream-Target-Safe shortlist.
              </p>
              <button
                className="btn btn-secondary text-sm"
                onClick={() => setMessages(initialChatMessages)}
              >
                Load Sample Conversation
              </button>
            </div>
          ) : (
            <>
              <div className="chat-day-divider">
                <span>Today</span>
              </div>

              {messages.map((m) => {
                const isStudent = m.sender === "student"
                return (
                  <div
                    key={m.id}
                    className={`message-row ${
                      isStudent ? "student-row" : "admin-row"
                    }`}
                  >
                    {!isStudent && (
                      <span
                        className="sender-circle-avatar"
                        title={m.senderName}
                      >
                        {m.senderAvatar || "NK"}
                      </span>
                    )}

                    <div
                      className={`message-bubble ${
                        isStudent ? "bubble-student" : "bubble-admin"
                      }`}
                    >
                      {!isStudent && (
                        <strong className="bubble-sender-name">
                          {m.senderName}
                        </strong>
                      )}
                      <p className="bubble-text">{m.text}</p>

                      {m.attachment && (
                        <div className="bubble-attachment">
                          <div className="attachment-icon">
                            {m.attachment.type === "pdf" ? (
                              <FileText size={20} />
                            ) : (
                              <ImageIcon size={20} />
                            )}
                          </div>
                          <div className="attachment-details">
                            <span className="attachment-name">
                              {m.attachment.name}
                            </span>
                            <small className="attachment-size">
                              {m.attachment.size}
                            </small>
                          </div>
                        </div>
                      )}

                      <span className="bubble-time">{m.timestamp}</span>
                    </div>

                    {isStudent && (
                      <span
                        className="sender-circle-avatar student-avatar"
                        title="You"
                      >
                        AK
                      </span>
                    )}
                  </div>
                )
              })}

              {isTyping && (
                <div className="message-row admin-row">
                  <span className="sender-circle-avatar">NK</span>
                  <div className="message-bubble bubble-admin typing-bubble">
                    <span className="typing-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <small>Neha is typing...</small>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Attachment preview if selected */}
        {attachedFile && (
          <div className="attachment-preview-bar">
            <div className="preview-chip">
              <FileText size={16} />
              <span>
                {attachedFile.name} ({attachedFile.size})
              </span>
              <button onClick={() => setAttachedFile(null)}>
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Chat Input Bar */}
        <footer className="chat-footer-bar">
          <div className="attachment-dropdown-group">
            <button
              className="chat-attach-btn"
              title="Attach Marksheet or ID"
              onClick={() => handleAttachDemo(attachedFile ? "image" : "pdf")}
            >
              <Paperclip size={18} />
            </button>
          </div>

          <input
            type="text"
            className="chat-text-input"
            placeholder="Type your message to counsellor... (Press Enter to send)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />

          <button
            className="chat-send-btn hover-lift"
            onClick={handleSend}
            disabled={!inputText.trim() && !attachedFile}
            title="Send Message"
          >
            <Send size={16} />
          </button>
        </footer>
      </div>
    </div>
  )
}
