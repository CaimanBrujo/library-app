import React from 'react'
import type { Book } from '../types/Book'
import BookEdit from './BookEdit'

type Props = {
  book: Book
  dispatch: React.Dispatch<
    | { type: 'TOGGLE_READ'; payload: string }
    | { type: 'REMOVE_BOOK'; payload: string }
    | { type: 'EDIT_BOOK'; payload: Book }
  >
}

export default function BookCard({ book, dispatch }: Props) {
  const [isEditing, setIsEditing] = React.useState(false)

  if (isEditing) {
    return (
      <div className="relative w-[300px] h-[230px] p-4 border border-border rounded-2xl shadow bg-card flex items-center justify-center">
        <BookEdit
          book={book}
          dispatch={dispatch}
          onClose={() => setIsEditing(false)}
        />
      </div>
    )
  }

  return (
    <div className="relative w-[300px] h-[230px] p-4 border border-border rounded-2xl shadow bg-card pt-[30px]">
      <div className="absolute top-2 right-2 flex gap-1">
        <button
          onClick={() => setIsEditing(true)}
          className="text-xs font-bold text-[color:var(--color-text)] dark:text-white bg-[color:var(--color-surface-300)] hover:bg-[color:var(--color-surface-400)] rounded-full w-6 h-6 flex items-center justify-center transition"
          aria-label="Edit book"
        >
          ✎
        </button>
        <button
          onClick={() => dispatch({ type: 'REMOVE_BOOK', payload: book.id })}
          className="text-xs font-bold text-[color:var(--color-text)] dark:text-white bg-[color:var(--color-surface-300)] hover:bg-[color:var(--color-surface-400)] rounded-full w-6 h-6 flex items-center justify-center transition"
          aria-label="Remove book"
        >
          ×
        </button>
      </div>

      <div>
        <h2 className="text-title text-lg font-semibold">{book.title}</h2>
        <p className="text-subtitle text-sm">{book.author}</p>
        <p className="text-subtitle text-sm">{book.pages} pages</p>
        <p className="mt-1 text-sm text-subtitle">
          Status:{' '}
          <span
            className={
              book.read
                ? 'text-[color:var(--color-read)]'
                : 'text-[color:var(--color-not-read)]'
            }
          >
            {book.read ? 'Read' : 'Not read'}
          </span>
        </p>
      </div>

      <button
        onClick={() => dispatch({ type: 'TOGGLE_READ', payload: book.id })}
        className="mt-3 px-3 py-1 text-sm bg-button text-white rounded-md hover:bg-button-hover transition-colors"
      >
        Mark as {book.read ? 'Unread' : 'Read'}
      </button>
    </div>
  )
}
