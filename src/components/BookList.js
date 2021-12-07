import BookDetails from './BookDetails'
import useBookContext from '../hooks/useBookContext'

const BookList = () => {
  const { books } = useBookContext()

  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read. Hello free time :-)</div>
  )
}

export default BookList
