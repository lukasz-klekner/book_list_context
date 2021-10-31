import Navbar from './components/Navbar'
import BookContextProvider from './context/BookContext'

const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
    </BookContextProvider>
  )
}

export default App
