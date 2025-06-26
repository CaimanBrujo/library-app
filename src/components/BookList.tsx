import type { Book } from '../types/Book'
import BookCard from './BookCard'

type Props = {
  books: Book[]
  dispatch: React.Dispatch<
    | { type: 'TOGGLE_READ'; payload: string }
    | { type: 'REMOVE_BOOK'; payload: string }
    | { type: 'EDIT_BOOK'; payload: Book }
  >
}

export default function BookList({ books, dispatch }: Props) {
  return (
    <div className="flex flex-col items-center content-center sm:flex-row sm:items-start sm:content-start flex-wrap gap-4 max-w-[1000px] mx-auto">
      {books.map((book) => (
        <BookCard key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  )
}
