import type { Book } from '../types/Book'
import BookCard from './BookCard'

type Props = {
  books: Book[]
  dispatch: React.Dispatch<
    | { type: 'TOGGLE_READ'; payload: string }
    | { type: 'REMOVE_BOOK'; payload: string }
  >
}

export default function BookList({ books, dispatch }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  )
}
