import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'
import Homepage from './components/HomePage'
import { useState } from 'react'
import SinglePost from './components/SinglePost'

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleDetailsClick = (post) => {
    console.log(post);
    setSelectedPost(post);
  }


  return (
    <>
    <nav>
      <Link to='/' className='myLinks'>Home</Link>
      <Link to='/posts' className='myLinks'>Marketplace</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/posts' element={<AllPosts handleDetailsClick={handleDetailsClick}/>}/>
      <Route path='/details/:id' element={<SinglePost selectedPost={selectedPost}/>}/>
    </Routes>
    </>
  )
}

export default App
