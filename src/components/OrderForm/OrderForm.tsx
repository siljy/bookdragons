import Button from '../Button/Button'

export default function OrderForm() {
  return (
    <form>
      <label htmlFor="name">Navn</label>
      <input type="text" name="name" />
      <label htmlFor="email">E-post</label>
      <input type="email" name="email" />
      <Button type="submit" variant="primary" text="Send inn bestilling" disabled={false}></Button>
    </form>
  )
}
