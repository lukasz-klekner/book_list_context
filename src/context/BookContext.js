import { createContext, useReducer, useEffect } from 'react'
import bookReducer from '../reducer/bookReducer'

export const BookContext = createContext(null)

const initialState = [
  { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
  { title: 'the final empire', author: 'brandon sanderson', id: 2 },
]

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, initialState, () => {
    const localStorageData = localStorage.getItem('books')
    return localStorageData ? JSON.parse(localStorageData) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  })

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
