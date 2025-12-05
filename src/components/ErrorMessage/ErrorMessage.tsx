import styles from './ErrorMessage.module.css'
import Link from 'next/link'

type ErrorMessageProps = {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={styles.errorMessage}>
      {message}
      <Link href={'/1'}>Gå tilbake til alle bøker</Link>
    </div>
  )
}
