import { useContext } from 'react'
import { REMOVE_BOOK } from '../constant'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book: { title, author, id } }) => {
  const { dispatch } = useContext(BookContext)

  return (
    <li onClick={() => dispatch({ type: REMOVE_BOOK, id })}>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
    </li>
  )
}

export default BookDetails
