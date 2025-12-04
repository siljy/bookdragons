import { useState } from 'react'
import Button from '../Button/Button'
import { useCartStore } from '@/store/cartStore'

export default function OrderForm() {
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const cart = useCartStore((state) => state.cart)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const orderData = {
      customer: {
        name: customerName,
        email: customerEmail,
      },
      items: cart.map((item: any) => ({
        book: item.id,
        quantity: item.quantity,
      })),
    }

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(orderData),
      })

      if (response.ok) {
        console.log('Ordre opprettet')
      }
    } catch (error) {
      console.error('Klarte ikke opprette ordre')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Fyll ut skjemaet for å sende bestillingen</h2>
      <label htmlFor="name">Navn</label>
      <input
        type="text"
        name="name"
        value={customerName}
        required
        onChange={(e) => {
          setCustomerName(e.currentTarget.value)
        }}
      />
      <label htmlFor="email">E-post</label>
      <input
        type="email"
        name="email"
        value={customerEmail}
        required
        onChange={(e) => {
          setCustomerEmail(e.currentTarget.value)
        }}
      />
      <Button type="submit" variant="primary" text="Send inn bestilling" disabled={false}></Button>
    </form>
  )
}
