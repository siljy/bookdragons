//Lagrer det kunden legger til i handlekurv i zustand

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BookInCart = {
  id: number
  title: string
  price: number
  quantity: number
}

type CartState = {
  cart: BookInCart[]
  addToCart: (book: Omit<BookInCart, 'quantity'>) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (book) => {
        const cart = get().cart

        //Sjekker om boken allerede er i handlekurven med å sammenligne id:
        const index = cart.findIndex((item) => item.id === book.id)

        let updatedCart

        if (index > -1) {
          //Hvis boken allerede eksisterer øker quantity med 1
          updatedCart = cart.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + 1 } : item,
          )
        } else {
          //Hvis ikke legges den til med 1 i quantity
          updatedCart = [...cart, { ...book, quantity: 1 }]
        }
        //Cart blir den oppdaterte handlekurven
        set({ cart: updatedCart })
      },
    }),
    {
      name: 'handlekurv',
    },
  ),
)
