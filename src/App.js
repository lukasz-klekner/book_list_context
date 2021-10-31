import BookList from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './context/BookContext'

const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
    </BookContextProvider>
  )
}

export default App
