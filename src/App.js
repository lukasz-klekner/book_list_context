import BookContextProvider from './context/BookContext'

const App = () => {
  return (
    <BookContextProvider>
      <div className='App'>New project!</div>
    </BookContextProvider>
  )
}

export default App
