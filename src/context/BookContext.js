import { createContext, useState } from 'react'
import { v4 } from 'uuid'

export const BookContext = createContext(null)

const initialState = [
  { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
  { title: 'the final empire', author: 'brandon sanderson', id: 2 },
]

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(initialState)

  const addBook = (title, author) =>
    setBooks([...books, { title, author, id: v4() }])

  const removeBook = (id) =>
    setBooks([...books].filter((book) => book.id !== id))

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
