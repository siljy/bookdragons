//Lagrer det kunden legger til i handlekurv i zustand
//Samt funksjoner for å legge til, øke, minke og fjerne fra handlekurv

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BookInCart } from '@/types/cart'

type CartState = {
  cart: BookInCart[]
  addToCart: (book: Omit<BookInCart, 'quantity'>) => void
  increaseCart: (id: BookInCart['id']) => void
  decreaseCart: (id: BookInCart['id']) => void
  removeFromCart(id: BookInCart['id']): void
  //Legge til en clearCart-funksjon
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      //Handlekurven
      cart: [],

      //Legg til bok i handlekurv
      addToCart: (book) => {
        const cart = get().cart

        //Finner bok som har samme id som det som ligger i handlekurv
        const existingBook = cart.find((item) => item.id === book.id)

        let updatedCart

        if (existingBook) {
          //Stopper brukeren fra å legge til flere bøker enn det er på lager
          if (existingBook.quantity >= book.stock) {
            alert('Det er ikke flere av denne på lager')
            return
          }
          //Hvis boka er i handlekurven, øk antall
          updatedCart = cart.map((item) =>
            item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        } else {
          //Hvis ikke legges den til med 1 i quantity
          updatedCart = [...cart, { ...book, quantity: 1, stock: book.stock }]
        }
        //Cart blir den oppdaterte handlekurven
        set({ cart: updatedCart })
      },

      increaseCart: (id) => {
        const cart = get().cart

        const existingBook = cart.find((item) => item.id === id)

        let updatedCart

        if (!existingBook) return

        if (existingBook.quantity >= existingBook.stock) {
          alert('Det er ikke flere av denne på lager')
          return
        }
        updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )

        set({ cart: updatedCart })
      },

      decreaseCart: (id) => {
        const cart = get().cart
        const existingBook = cart.find((item) => item.id === id)

        let updatedCart

        //Varsler bruker om antall er 1
        if (existingBook && existingBook.quantity === 1) {
          alert('Kan ikke fjerne flere av denne boka')
          return
        }

        updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        set({ cart: updatedCart })
      },

      removeFromCart: (id) => {
        const cart = get().cart

        let updatedCart = cart.filter((item) => item.id !== id)
        set({ cart: updatedCart })
      },
    }),
    {
      name: 'handlekurv',
    },
  ),
)
