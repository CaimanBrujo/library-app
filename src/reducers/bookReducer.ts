import type { Book } from '../types/Book'
import { initialBooks } from '../data/initialBooks'

export type Action =
  | { type: 'ADD_BOOK'; payload: Book }
  | { type: 'REMOVE_BOOK'; payload: string }
  | { type: 'TOGGLE_READ'; payload: string }
  | { type: 'EDIT_BOOK'; payload: Book }
  | { type: 'RESET_DEFAULT' }

export function bookReducer(state: Book[], action: Action): Book[] {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload)
    case 'TOGGLE_READ':
      return state.map((book) =>
        book.id === action.payload ? { ...book, read: !book.read } : book
      )
    case 'EDIT_BOOK':
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      )
    case 'RESET_DEFAULT':
      return initialBooks
    default:
      return state
  }
}
