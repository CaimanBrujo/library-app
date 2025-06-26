import React from 'react'
import type { Book } from '../types/Book'

type Props = {
  book: Book
  dispatch: React.Dispatch<
    | { type: 'TOGGLE_READ'; payload: string }
    | { type: 'REMOVE_BOOK'; payload: string }
  >
}

export default function BookCard({ book, dispatch }: Props) {
  return (
    <div className="relative w-[300px] h-[230px] flex flex-col justify-between p-4 border border-border rounded shadow-sm bg-gray-800">
      <button
        onClick={() => dispatch({ type: 'REMOVE_BOOK', payload: book.id })}
        className="absolute top-2 right-2 text-sm text-white bg-red-700 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center"
        aria-label="Remove book"
      >
        ×
      </button>

      <div>
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-muted">{book.author}</p>
        <p className="text-muted">{book.pages} pages</p>
        <p className="mt-1">
          Status:{' '}
          <span className={book.read ? 'text-green-500' : 'text-red-500'}>
            {book.read ? 'Read' : 'Not read'}
          </span>
        </p>
      </div>

      <button
        onClick={() => dispatch({ type: 'TOGGLE_READ', payload: book.id })}
        className="px-3 py-1 text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors self-start"
      >
        Mark as {book.read ? 'Unread' : 'Read'}
      </button>
    </div>
  )
}
