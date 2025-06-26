import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import { bookReducer } from './reducers/bookReducer'
import { initialBooks } from './data/initialBooks'

const LOCAL_STORAGE_KEY = 'library-books'

export default function App() {
  const [books, dispatch] = React.useReducer(bookReducer, [], () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    return stored ? JSON.parse(stored) : initialBooks
  })

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books))
  }, [books])

  const handleReset = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    dispatch({ type: 'RESET_DEFAULT' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--color-background)] text-[color:var(--color-text)]">
      <Header />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Books</h1>
        <BookForm dispatch={dispatch} />
        <BookList books={books} dispatch={dispatch} />
      </main>

      <div className="p-4">
        <button
          onClick={handleReset}
          className="w-full max-w-xs mx-auto block px-4 py-2 bg-[color:var(--color-gray-600)] text-white rounded hover:bg-[color:var(--color-gray-500)] transition-colors"
        >
          Reset to Default
        </button>
      </div>

      <Footer />
    </div>
  )
}
