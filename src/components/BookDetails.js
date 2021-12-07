import { REMOVE_BOOK } from '../constant'
import useBookContext from '../hooks/useBookContext'

const BookDetails = ({ book: { title, author, id } }) => {
  const { dispatch } = useBookContext()

  return (
    <li onClick={() => dispatch({ type: REMOVE_BOOK, id })}>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
    </li>
  )
}

export default BookDetails
