import { FormEvent, useState } from "react"
import { ArrowRight, Eye, EyeOff, Mail } from "lucide-react"
import { Button } from "../components/common/Button"
import { Field } from "../components/common/Field"
import { Logo } from "../components/common/Logo"
import { AuthShell } from "../components/layout/AuthShell"
import type { Page } from "../types"

export type AuthPageProps = {
  mode: "login" | "register" | "forgot"
  go: (p: Page) => void
  login: () => void
}

export function AuthPage({ mode, go, login }: AuthPageProps) {
  const [show, setShow] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (mode === "login") {
      login()
    } else if (mode === "register") {
      go("login")
    } else {
      setSent(true)
    }
  }

  if (mode === "forgot" && sent) {
    return (
      <AuthShell>
        <div className="auth-success">
          <span>
            <Mail />
          </span>
          <h1>Check your inbox</h1>
          <p>
            We sent a reset link and OTP to <strong>student@email.com</strong>.
          </p>
          <Button onClick={() => go("login")}>Back to Login</Button>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell>
      <div className="auth-card">
        <Logo go={go} />
        <div className="auth-heading">
          <h1>
            {mode === "login"
              ? "Welcome back"
              : mode === "register"
                ? "Create your account"
                : "Reset your password"}
          </h1>
          <p>
            {mode === "login"
              ? "Sign in to continue your admission journey."
              : mode === "register"
                ? "Start building your college plan today."
                : "Enter your email and we’ll send a reset link."}
          </p>
        </div>
        <form onSubmit={submit}>
          {mode === "register" && (
            <Field label="Full name" placeholder="Aarav Kumar" />
          )}
          <Field
            label={mode === "login" ? "Email or phone" : "Email address"}
            placeholder="student@email.com"
          />
          {mode === "register" && (
            <>
              <Field label="Phone number" placeholder="+91 98765 43210" />
              <Field label="Class / Stream">
                <select>
                  <option>Class 12 — Science</option>
                  <option>Class 12 — Commerce</option>
                  <option>Undergraduate</option>
                </select>
              </Field>
            </>
          )}
          {mode !== "forgot" && (
            <Field
              label="Password"
              error={
                mode === "login"
                  ? "Demo error state: use any password to continue"
                  : undefined
              }
            >
              <div className="password-input">
                <input
                  type={show ? "text" : "password"}
                  placeholder="At least 8 characters"
                />
                <button type="button" onClick={() => setShow(!show)}>
                  {show ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </Field>
          )}
          {mode === "register" && (
            <>
              <Field label="Confirm password">
                <input type="password" placeholder="Repeat your password" />
              </Field>
              <label className="checkbox">
                <input type="checkbox" /> I agree to the Terms and Privacy
                Policy
              </label>
            </>
          )}
          {mode === "login" && (
            <button
              type="button"
              className="forgot-link"
              onClick={() => go("forgot")}
            >
              Forgot password?
            </button>
          )}
          <Button type="submit" className="full">
            {mode === "login"
              ? "Login"
              : mode === "register"
                ? "Create Account"
                : "Send Reset Link"}{" "}
            <ArrowRight size={17} />
          </Button>
        </form>
        {mode !== "forgot" && (
          <>
            <div className="or">
              <span />
              or continue with
              <span />
            </div>
            <Button variant="secondary" className="full">
              <b className="google">G</b>{" "}
              {mode === "login" ? "Login" : "Sign up"} with Google
            </Button>
            <p className="auth-switch">
              {mode === "login"
                ? "New to NextStep?"
                : "Already have an account?"}{" "}
              <button
                onClick={() => go(mode === "login" ? "register" : "login")}
              >
                {mode === "login" ? "Create account" : "Login"}
              </button>
            </p>
          </>
        )}
      </div>
    </AuthShell>
  )
}
