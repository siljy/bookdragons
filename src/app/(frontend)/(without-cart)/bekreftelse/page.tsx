import Link from 'next/link'
import Button from '@/components/Button/Button'

export default function ConfirmationPage() {
  return (
    <section>
      <h1>Hurra! Bestillingen din er sendt til oss</h1>
      <div className='orderInformation'>
        <h2>Hva skjer nå?</h2>
        <ol>
          <li>Du mottar en e-post når bestillingen er klar til å hentes</li>
          <li>Du henter bestillingen din hos oss i Eventyrstien 3</li>
        </ol>
        <p>Om du har noen spørsmål, kontakt oss på kundeservice@bookdragons.com</p>
      </div>

      <div className='orderInformation'>
        <h2>Ute etter mer lesestoff?</h2>
        <Link href={'/'}>
          <Button
            text="Utforsk utvalget vårt"
            type="button"
            variant="primary"
            disabled={false}
          ></Button>
        </Link>
      </div>
    </section>
  )
}
