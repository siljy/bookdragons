import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Alle bøker</Link>
      <Link href="/forfattere">Forfattere</Link>
      <Link href="/sjangre">Sjangre</Link>
    </nav>
  )
}
