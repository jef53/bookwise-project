
import { InputHTMLAttributes, ReactNode } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode,
}

export const Input = ({ icon, className, ...props }: InputProps) => {
  return (
    <div className={className}>
      <input {...props} />
      <span> {icon}</span>
    </div>


  )
}