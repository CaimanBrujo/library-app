import { useReducer } from 'react'
import { bookReducer } from './reducers/bookReducer'
import type { Book } from './types/Book'

import Header from './components/Header'
import Footer from './components/Footer'
import BookForm from './components/BookForm'
import BookList from './components/BookList'

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

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 w-fit mx-auto">Library App</h1>
        <BookForm dispatch={dispatch} />
        <BookList books={books} dispatch={dispatch} />
      </main>
      <Footer />
    </div>
  )
}
