import { ReactNode } from "react"
import { X } from "lucide-react"

export type FieldProps = {
  label: string
  placeholder?: string
  type?: string
  error?: string
  children?: ReactNode
}

export function Field({
  label,
  placeholder,
  type = "text",
  error,
  children,
}: FieldProps) {
  return (
    <label className="field">
      <span>{label}</span>
      {children || (
        <input
          type={type}
          placeholder={placeholder}
          className={error ? "has-error" : ""}
        />
      )}
      {error && (
        <small>
          <X size={13} /> {error}
        </small>
      )}
    </label>
  )
}
