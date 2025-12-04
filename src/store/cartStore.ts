//Lagrer det kunden legger til i handlekurv i zustand

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BookInCart } from '@/types/cart'

type CartState = {
  cart: BookInCart[]
  addToCart: (book: Omit<BookInCart, 'quantity'>) => void
  increaseCart: (id: BookInCart['id']) => void
  decreaseCart: (id: BookInCart['id']) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      //Handlekurven
      cart: [],

      //Legg til bok i handlekurv
      addToCart: (book) => {
        const cart = get().cart

        //Sjekker om boken allerede er i handlekurven med å finne den via index og sammenligne id:
        const index = cart.findIndex((item) => item.id === book.id)

        let updatedCart

        if (index > -1) {
          //Hvis boken allerede eksisterer øker quantity med 1, hvis ikke returnerer den bare samme bok
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

      increaseCart: (id) => {
        const cart = get().cart

        //Finner boka med å sammenligne id som kommer inn med det som ligger i cart
        const existingBook = cart.find((item) => item.id === id)

        let updatedCart

        //Hvis boka eksisterer og id samsvarer, oppdateres quantity
        if (existingBook) {
          updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        }
        set({ cart: updatedCart })
      },

      decreaseCart: (id) => {
        const cart = get().cart
        const existingBook = cart.find((item) => item.id === id)

        let updatedCart

        //Varsler bruker om antall er 1
        if (existingBook && existingBook.quantity === 1) {
          alert('Kan ikke fjerne flere av denne varen')
          return
        }

        updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        set({ cart: updatedCart })
      },
    }),
    {
      name: 'handlekurv',
    },
  ),
)
