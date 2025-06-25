import type { Book } from '../types/Book'

export type Action =
  | { type: 'ADD_BOOK'; payload: Book }
  | { type: 'REMOVE_BOOK'; payload: string } // id
  | { type: 'TOGGLE_READ'; payload: string } // id

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
    default:
      return state
  }
}
