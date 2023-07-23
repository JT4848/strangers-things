import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'
import Homepage from './components/HomePage'
import { useState } from 'react'
import SinglePost from './components/SinglePost'
import RegisterUser from './components/RegisterUser'
import SignInUser from './components/SignInUser'

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleDetailsClick = (post) => {
    console.log(post);
    setSelectedPost(post);
  }


  return (
    <>
    <h2 className='myLinks'>Marketplace</h2>
    <nav>
      <Link to='/' className='myLinks'>Home</Link>
      <Link to='/posts' className='myLinks'>Marketplace</Link>
      <Link to='/posts' className='myLinks'>Sell</Link>
      <Link to='/users/register' className='myLinks'>Sign up</Link>
      <Link to='/users/login' className='myLinks'>Sign in</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/posts' element={<AllPosts handleDetailsClick={handleDetailsClick}/>}/>
      <Route path='/details/:id' element={<SinglePost selectedPost={selectedPost}/>}/>
      <Route path='/users/register' element={<RegisterUser />} />
      <Route path='/users/login' element={<SignInUser />}/>
      <Route path='/posts' element={<UserPosts/>}/>
    </Routes>
    </>
  )
}

export default App
