import { CSS } from "@stitches/react"
import { InputHTMLAttributes, ReactNode } from "react"
import styles from './styles.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode,
}

export const Input = ({ icon, ...props }: InputProps) => {
  return (
    <div className={styles.main}>
      <input {...props} />
      <span> {icon}</span>
    </div>


  )
}