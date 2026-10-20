import { useState } from "react"
import {
  ArrowLeft,
  Hand,
  Maximize2,
  Mic,
  MicOff,
  Radio,
  Send,
  Users,
  Video,
  Volume2,
} from "lucide-react"
import type { Page } from "../../types"

export type LiveRoomPageProps = {
  go: (p: Page) => void
  toast?: (s: string) => void
}

type LiveChatMsg = {
  id: string
  user: string
  avatar: string
  text: string
  time: string
  isHost?: boolean
}

const initialRoomMessages: LiveChatMsg[] = [
  {
    id: "rc-1",
    user: "Neha Kapoor",
    avatar: "NK",
    text: "Welcome everyone! We are covering MHT-CET CAP Round 1 & 2 cutoff trends today.",
    time: "4:02 PM",
    isHost: true,
  },
  {
    id: "rc-2",
    user: "Rohan Joshi",
    avatar: "RJ",
    text: "Ma'am, does PICT allow branch change after first year?",
    time: "4:04 PM",
  },
  {
    id: "rc-3",
    user: "Ananya Deshmukh",
    avatar: "AD",
    text: "Can we apply for both TFWS and Open seats in the same option form?",
    time: "4:05 PM",
  },
  {
    id: "rc-4",
    user: "Neha Kapoor",
    avatar: "NK",
    text: "Yes Ananya, you can list both choice codes! I will show the live option form demo in 5 minutes.",
    time: "4:06 PM",
    isHost: true,
  },
]

export function LiveRoomPage({ go, toast }: LiveRoomPageProps) {
  const [messages, setMessages] = useState<LiveChatMsg[]>(initialRoomMessages)
  const [inputVal, setInputVal] = useState("")
  const [micOn, setMicOn] = useState(false)
  const [handRaised, setHandRaised] = useState(false)
  const [viewerCount, setViewerCount] = useState(49)

  const handleSend = () => {
    if (!inputVal.trim()) return

    const newMsg: LiveChatMsg = {
      id: `rc-${Date.now()}`,
      user: "Aarav Kumar (You)",
      avatar: "AK",
      text: inputVal.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setMessages((prev) => [...prev, newMsg])
    setInputVal("")

    // Simulated host acknowledgement
    setTimeout(() => {
      const hostAck: LiveChatMsg = {
        id: `rc-${Date.now() + 1}`,
        user: "Neha Kapoor",
        avatar: "NK",
        text: "Good question Aarav! I'm bringing that slide on the screen right now.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isHost: true,
      }
      setMessages((prev) => [...prev, hostAck])
    }, 1800)
  }

  const toggleHand = () => {
    setHandRaised(!handRaised)
    if (!handRaised) {
      if (toast) toast("Hand raised! You are #4 in the question queue.")
    } else {
      if (toast) toast("Hand lowered.")
    }
  }

  return (
    <div className="live-room-container fade-up">
      {/* Top Bar Navigation */}
      <div className="live-room-nav">
        <button className="btn-back-live" onClick={() => go("live")}>
          <ArrowLeft size={16} /> Exit Live Room
        </button>
        <div className="live-room-title-bar">
          <span className="live-badge pulse-red">
            <span className="live-dot" /> LIVE
          </span>
          <h3>MHT-CET & JEE CAP Round Strategy 2025</h3>
        </div>
        <div className="live-room-stats">
          <span className="participant-chip">
            <Users size={14} /> <strong>{viewerCount}</strong> in room
          </span>
        </div>
      </div>

      {/* Main Grid: 16:9 Video Player + Chat Panel */}
      <div className="live-room-grid">
        {/* Left/Top: 16:9 Video Player */}
        <div className="video-player-container">
          <div className="video-viewport">
            {/* Visual Stream Simulation */}
            <div className="stream-slide-view">
              <div className="slide-content">
                <span className="pill">CAP Round Masterclass</span>
                <h2>Option Form Strategy: Dream vs Target vs Safe</h2>
                <div className="slide-bullet-points">
                  <div>
                    1. Top 1-10 Options: Dream Tier (0.5%ile above your score)
                  </div>
                  <div>
                    2. Options 11-25: Target Tier (Realistic range based on 2024
                    cutoff)
                  </div>
                  <div>
                    3. Options 26-40: Guaranteed Safe Tier (Autonomous/Govt
                    backups)
                  </div>
                </div>
              </div>
            </div>

            {/* Inset Host Camera Overlay */}
            <div className="host-camera-pip">
              <div className="host-camera-avatar">
                <span className="avatar-circle">NK</span>
                <span className="speaking-wave" />
              </div>
              <div className="host-camera-label">
                <span>Neha Kapoor (Speaking)</span>
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="video-controls-overlay">
              <div className="video-controls-left">
                <button
                  className={`ctrl-btn ${micOn ? "ctrl-active" : ""}`}
                  onClick={() => {
                    setMicOn(!micOn)
                    if (toast)
                      toast(
                        micOn
                          ? "Microphone muted"
                          : "Microphone unmuted (Host permitted)",
                      )
                  }}
                  title={micOn ? "Mute Mic" : "Unmute Mic"}
                >
                  {micOn ? <Mic size={17} /> : <MicOff size={17} />}
                </button>
                <button className="ctrl-btn" title="Volume">
                  <Volume2 size={17} />
                </button>
                <span className="stream-quality-tag">1080p HD</span>
              </div>

              <div className="video-controls-center">
                <button
                  className={`btn-hand-raise ${
                    handRaised ? "hand-raised" : ""
                  }`}
                  onClick={toggleHand}
                >
                  <Hand size={16} />
                  <span>{handRaised ? "Hand Raised (#4)" : "Raise Hand"}</span>
                </button>
              </div>

              <div className="video-controls-right">
                <button
                  className="ctrl-btn"
                  onClick={() => toast && toast("Switched to Fullscreen")}
                >
                  <Maximize2 size={17} />
                </button>
                <button className="btn-leave-room" onClick={() => go("live")}>
                  Leave Room
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right/Bottom: Live Interactive Chat Panel */}
        <aside className="live-chat-panel">
          <header className="live-chat-header">
            <div>
              <h4>Live Stream Chat</h4>
              <small>{viewerCount} active participants</small>
            </div>
            <span className="live-indicator-chip">
              <Radio size={12} className="text-red-500 animate-pulse mr-1" />{" "}
              Active
            </span>
          </header>

          <div className="live-chat-body">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`live-chat-row ${m.isHost ? "host-chat-row" : ""}`}
              >
                <span className="live-chat-avatar">{m.avatar}</span>
                <div className="live-chat-bubble">
                  <div className="live-chat-sender-line">
                    <strong>{m.user}</strong>
                    {m.isHost && <span className="host-badge">HOST</span>}
                    <small>{m.time}</small>
                  </div>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          <footer className="live-chat-footer">
            <input
              type="text"
              placeholder="Ask a live question to Neha Kapoor..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="live-chat-send-btn"
              onClick={handleSend}
              disabled={!inputVal.trim()}
              title="Send to live chat"
            >
              <Send size={15} />
            </button>
          </footer>
        </aside>
      </div>
    </div>
  )
}
