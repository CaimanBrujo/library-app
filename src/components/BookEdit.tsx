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
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-1 rounded bg-gray-700 text-white"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-1 rounded bg-gray-700 text-white"
      />
      <input
        type="number"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        className="w-full p-1 rounded bg-gray-700 text-white"
      />
      <label className="flex items-center gap-2 text-sm text-white">
        <input
          type="checkbox"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
        />
        Already read
      </label>
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          className="px-2 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-500"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-2 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
