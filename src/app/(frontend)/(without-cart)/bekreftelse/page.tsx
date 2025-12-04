import Link from 'next/link'

export default function ConfirmationPage() {
  return (
    <section>
      <h1>Hurra! Bestillingen din er sendt til oss</h1>
      <h2>Du mottar en e-post når den er klar til å hentes</h2>
      <p>Om du har noen spørsmål, kontakt oss på kundeservice@bookdragons.com</p>
      <p>Vår adresse: Eventyrstien 12, Østlandet</p>

      <div>
        <h2>Ute etter mer lesestoff?</h2>
        <Link href={'1'}>Utforsk utvalget vårt</Link>
      </div>
    </section>
  )
}
