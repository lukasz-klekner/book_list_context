import { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const { addBook } = useContext(BookContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type='text'
        placeholder='author'
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        required
      />
      <input type='submit' value='Add book' />
    </form>
  )
}

export default BookForm
