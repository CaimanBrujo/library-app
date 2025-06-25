import { useReducer } from 'react'
import { bookReducer } from './reducers/bookReducer'
import type { Book } from './types/Book'

import Header from './components/Header'
import Footer from './components/Footer'

const initialBooks: Book[] = [
  {
    id: crypto.randomUUID(),
    title: 'The Odin Project',
    author: 'Odin',
    pages: 300,
    read: true
  }
]

export default function App() {
  const [books, dispatch] = useReducer(bookReducer, initialBooks)

  const handleAddBook = () => {
    dispatch({
      type: 'ADD_BOOK',
      payload: {
        id: crypto.randomUUID(),
        title: 'The Hobbit',
        author: 'Tolkien',
        pages: 123,
        read: false
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Library App</h1>

        <button
          onClick={handleAddBook}
          className="px-4 py-2 bg-[color:var(--color-gray-400)] text-white rounded hover:brightness-110 transition-colors duration-200 mb-4"
        >
          Add Book
        </button>

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
      </main>
      <Footer />
    </div>
  )
}
