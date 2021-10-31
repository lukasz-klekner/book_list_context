import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book: { title, author, id } }) => {
  const { removeBook } = useContext(BookContext)

  return (
    <li onClick={() => removeBook(id)}>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
    </li>
  )
}

export default BookDetails
