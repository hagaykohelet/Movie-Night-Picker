import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import MoviePage from './pages/MoviePage';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
