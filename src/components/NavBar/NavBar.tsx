import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.logo} href="/">BookDragons</Link>
      <div className={styles.navLinks}>
        <Link href="/forfatter">Forfattere</Link>
        <Link href="/sjanger">Sjangre</Link>
      </div>
    </nav>
  )
}
