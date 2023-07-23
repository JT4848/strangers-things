import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'
import Homepage from './components/HomePage'

const App = () => {
  
  return (
    <>
    <nav>
      <Link to='/' className='myLinks'>Home</Link>
      <Link to='/posts' className='myLinks'>Marketplace</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/posts' element={<AllPosts />}/>
    </Routes>
    </>
  )
}

export default App
