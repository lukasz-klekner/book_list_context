import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
  const { books } = useContext(BookContext)

  return (
    <div className='navbar'>
      <h1>My reading list</h1>
      <p>Currenly I have {books.length} books</p>
    </div>
  )
}

export default Navbar
