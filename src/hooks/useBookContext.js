import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const useBookContext = () => useContext(BookContext)

export default useBookContext