import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Alle bøker</Link>
      <Link href="/forfatter">Forfattere</Link>
      <Link href="/sjanger">Sjangre</Link>
    </nav>
  )
}
