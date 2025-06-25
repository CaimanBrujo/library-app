import React from 'react'
import type { Book } from '../types/Book'

type Props = {
  books: Book[]
  dispatch: React.Dispatch<
    | { type: 'TOGGLE_READ'; payload: string }
    | { type: 'REMOVE_BOOK'; payload: string }
  >
}

export default function BookList({ books, dispatch }: Props) {
  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <li
          key={book.id}
          className="p-4 border border-border rounded shadow-sm bg-gray-800"
        >
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-muted">
            {book.author} — {book.pages} pages
          </p>
          <p className="mt-1">
            Status:{' '}
            <span className={book.read ? 'text-green-500' : 'text-red-500'}>
              {book.read ? 'Read' : 'Not read'}
            </span>
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() =>
                dispatch({ type: 'TOGGLE_READ', payload: book.id })
              }
              className="px-3 py-1 text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Mark as {book.read ? 'Unread' : 'Read'}
            </button>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_BOOK', payload: book.id })
              }
              className="px-3 py-1 text-sm bg-red-700 text-white rounded hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
