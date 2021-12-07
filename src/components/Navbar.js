import useBookContext from '../hooks/useBookContext'

const Navbar = () => {
  const { books } = useBookContext()

  return (
    <div className='navbar'>
      <h1>My reading list</h1>
      <p>Currenly I have {books.length} books</p>
    </div>
  )
}

export default Navbar
