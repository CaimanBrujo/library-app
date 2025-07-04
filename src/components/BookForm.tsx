import React, { useRef, useEffect } from 'react'
import type { Book } from '../types/Book'

type Props = {
  dispatch: React.Dispatch<{ type: 'ADD_BOOK'; payload: Book }>
}

export default function BookForm({ dispatch }: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [pages, setPages] = React.useState('')
  const [read, setRead] = React.useState(false)
  const [error, setError] = React.useState('')

  const overlayRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !author || !pages) {
      setError('All fields are required')
      return
    }

    dispatch({
      type: 'ADD_BOOK',
      payload: {
        id: crypto.randomUUID(),
        title,
        author,
        pages: Number(pages),
        read
      }
    })

    setTitle('')
    setAuthor('')
    setPages('')
    setRead(false)
    setError('')
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
        setError('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="mb-6 relative z-10">
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setError('')
        }}
        className="px-4 py-2 w-[150px] mx-auto block bg-button text-white rounded-md hover:bg-button-hover transition duration-200 mb-4"
      >
        {isOpen ? 'Cancel' : 'Add New Book'}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <form
            ref={overlayRef}
            onSubmit={handleSubmit}
            className="bg-card p-6 rounded-2xl shadow-lg w-[90%] max-w-[500px] space-y-4 border border-border"
          >
            <h2 className="text-title text-2xl font-bold">New Book</h2>

            {error && (
              <div className="text-red-400 text-sm font-medium">{error}</div>
            )}

            <input
              type="text"
              placeholder="Title"
              className="w-full px-3 py-2 rounded-md bg-surface-300 text-title placeholder-muted border border-border focus:outline-none focus:ring-2 focus:ring-button-hover"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full px-3 py-2 rounded-md bg-surface-300 text-title placeholder-muted border border-border focus:outline-none focus:ring-2 focus:ring-button-hover"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="number"
              placeholder="Pages"
              className="w-full px-3 py-2 rounded-md bg-surface-300 text-title placeholder-muted border border-border focus:outline-none focus:ring-2 focus:ring-button-hover"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
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

            <button
              type="submit"
              className="w-full px-4 py-2 bg-button text-white rounded-md hover:bg-button-hover transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
