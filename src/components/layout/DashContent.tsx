import { ReactNode } from "react"

export type DashContentProps = {
  title: string
  copy: string
  children: ReactNode
}

export function DashContent({ title, copy, children }: DashContentProps) {
  return (
    <div className="dash-content">
      <div className="dash-heading">
        <div>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
      </div>
      {children}
    </div>
  )
}
