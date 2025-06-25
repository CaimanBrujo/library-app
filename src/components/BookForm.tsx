import React from 'react'
import { useState } from 'react'
import type { Book } from '../types/Book'

type Props = {
  dispatch: React.Dispatch<{ type: 'ADD_BOOK'; payload: Book }>
}

export default function BookForm({ dispatch }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !author.trim() || !pages.trim()) {
      setError('All fields are required.')
      return
    }

    dispatch({
      type: 'ADD_BOOK',
      payload: {
        id: crypto.randomUUID(),
        title,
        author,
        pages: Number(pages),
        read: false
      }
    })

    setTitle('')
    setAuthor('')
    setPages('')
    setError('')
    setIsOpen(false)
  }

  return (
    <div className="mb-6">
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setError('')
        }}
        className="px-4 py-2 bg-[color:var(--color-gray-400)] text-white rounded hover:brightness-110 transition-colors duration-200 mb-4"
      >
        {isOpen ? 'Cancel' : 'Add New Book'}
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-400 text-sm font-medium">{error}</div>
          )}
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Pages"
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  )
}
