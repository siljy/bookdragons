import styles from './Button.module.css'

type ButtonProps = {
  type: 'button' | 'submit'
  variant: 'primary' | 'secondary' | 'disabled'
  text: string
  //onclick:
}

export default function Button({ type, variant, text }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </button>
  )
}
