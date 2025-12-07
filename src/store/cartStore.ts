//Lagrer det kunden legger til i handlekurv i zustand: cart
//Funksjoner for å legge til, øke, minke og fjerne fra handlekurv

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BookInCart } from '@/types/cart'

type CartState = {
  cart: BookInCart[]
  addToCart: (book: Omit<BookInCart, 'quantity'>) => void
  increaseCart: (id: BookInCart['id']) => void
  decreaseCart: (id: BookInCart['id']) => void
  removeFromCart(id: BookInCart['id']): void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get, store) => ({
      cart: [],

      //Legg til bok i handlekurv
      addToCart: (book) => {
        const cart = get().cart

        const existingBook = cart.find((item) => item.id === book.id)

        let updatedCart

        if (existingBook) {
          if (existingBook.quantity >= book.stock) {
            alert('Det er ikke flere av denne på lager')
            return
          }
          updatedCart = cart.map((item) =>
            item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        } else {
          updatedCart = [...cart, { ...book, quantity: 1, stock: book.stock }]
        }

        set({ cart: updatedCart })
      },

      //Øke antall i handlekurv
      increaseCart: (id) => {
        const cart = get().cart

        const existingBook = cart.find((item) => item.id === id)

        if (!existingBook) return

        if (existingBook.quantity >= existingBook.stock) {
          alert('Det er ikke flere av denne på lager')
          return
        }
        let updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )

        set({ cart: updatedCart })
      },

      //Minke antall i handlekurv
      decreaseCart: (id) => {
        const cart = get().cart
        const existingBook = cart.find((item) => item.id === id)

        if (existingBook && existingBook.quantity === 1) {
          alert('Kan ikke fjerne flere av denne boka')
          return
        }

        let updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        set({ cart: updatedCart })
      },

      //Fjerne bok fra handlekurv
      removeFromCart: (id) => {
        const cart = get().cart

        let updatedCart = cart.filter((item) => item.id !== id)
        set({ cart: updatedCart })
      },

      clearCart: () => {
        set(store.getInitialState())
      },
    }),
    {
      name: 'handlekurv',
    },
  ),
)
