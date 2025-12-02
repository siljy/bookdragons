import styles from './Button.module.css'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'disabled'
  text: string
  //onclick:
}

export default function Button({ variant, text }: ButtonProps) {
  return <button className={`${styles.button} ${styles[variant]}`}>{text}</button>
}
