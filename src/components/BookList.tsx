import React from 'react'
import type { Book } from '../types/Book'
import BookCard from './BookCard'

type Props = {
  books: Book[]
  dispatch: React.Dispatch<
    | { type: 'TOGGLE_READ'; payload: string }
    | { type: 'REMOVE_BOOK'; payload: string }
    | { type: 'EDIT_BOOK'; payload: Book }
  >
}

export default function BookList({ books, dispatch }: Props) {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-wrap justify-center gap-6 max-w-[1000px]">
        {books.map((book) => (
          <BookCard key={book.id} book={book} dispatch={dispatch} />
        ))}
      </div>
    </div>
  )
}
