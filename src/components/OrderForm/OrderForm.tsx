import Button from '../Button/Button'

export default function OrderForm() {
    function handleSubmit(){

    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Fyll ut skjemaet for å sende bestillingen</h2>
      <label htmlFor="name">Navn</label>
      <input type="text" name="name" required/>
      <label htmlFor="email">E-post</label>
      <input type="email" name="email" required/>
      <Button type="submit" variant="primary" text="Send inn bestilling" disabled={false}></Button>
    </form>
  )
}
