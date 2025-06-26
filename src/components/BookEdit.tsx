import React from 'react'
import type { Book } from '../types/Book'

type Props = {
  book: Book
  dispatch: React.Dispatch<{ type: 'EDIT_BOOK'; payload: Book }>
  onClose: () => void
}

export default function BookEdit({ book, dispatch, onClose }: Props) {
  const [title, setTitle] = React.useState(book.title)
  const [author, setAuthor] = React.useState(book.author)
  const [pages, setPages] = React.useState(book.pages.toString())
  const [read, setRead] = React.useState(book.read)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({
      type: 'EDIT_BOOK',
      payload: {
        id: book.id,
        title,
        author,
        pages: Number(pages),
        read
      }
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-surface-300 text-title placeholder-muted border border-border focus:outline-none focus:ring-2 focus:ring-button-hover"
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-surface-300 text-title placeholder-muted border border-border focus:outline-none focus:ring-2 focus:ring-button-hover"
        placeholder="Author"
      />
      <input
        type="number"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-surface-300 text-title placeholder-muted border border-border focus:outline-none focus:ring-2 focus:ring-button-hover"
        placeholder="Pages"
      />
      <label className="flex items-center gap-2 text-sm text-subtitle">
        <input
          type="checkbox"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
          className="accent-button"
        />
        Already read
      </label>
      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          className="px-4 py-1.5 text-sm bg-button text-white rounded-md hover:bg-button-hover transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-1.5 text-sm bg-surface-300 text-title rounded-md hover:bg-surface-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
