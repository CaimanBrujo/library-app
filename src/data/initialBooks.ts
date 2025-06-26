import type { Book } from '../types/Book'

export const initialBooks: Book[] = [
  {
    id: crypto.randomUUID(),
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    pages: 194,
    read: true
  },
  {
    id: crypto.randomUUID(),
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    read: true
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    pages: 176,
    read: false
  }
]
