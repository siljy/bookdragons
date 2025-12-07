import styles from './Button.module.css'

type ButtonProps = {
  type: 'button' | 'submit'
  variant: 'primary' | 'secondary' | 'disabled'
  text: string
  disabled: boolean;
  onClick?: () => void
}

export default function Button({ type, variant, text, disabled, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </button>
  )
}
