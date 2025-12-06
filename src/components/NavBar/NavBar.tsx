import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">BookDragons</Link>
      <Link href="/forfatter">Forfattere</Link>
      <Link href="/sjanger">Sjangre</Link>
    </nav>
  )
}
