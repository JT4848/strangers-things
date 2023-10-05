import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'
import Homepage from './components/HomePage'
import { useState } from 'react'
import SinglePost from './components/SinglePost'
import RegisterUser from './components/RegisterUser'
import SignInUser from './components/SignInUser'
import UserPosts from './components/UserPosts'
import LogoutButton from './components/LogoutButton';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [mytoken, setMyToken] = useState(null);

  const handleDetailsClick = (post) => {
    setSelectedPost(post);
  }

  const handleLogout = () => {
    setMyToken(null);
  }

  return (
    <>
    <h2 className='myLinks'>Marketplace</h2>
    <nav>
      <Link to='/' className='myLinks'>Home</Link>
      <Link to='/posts' className='myLinks'>Marketplace</Link>
      {mytoken ? (
        <>
        <Link to='/user/post' className='myLinks'>Sell</Link>
        <LogoutButton handleLogout={handleLogout} />
        </>
      ) : null}
      {mytoken ? null : (
        <>
          <Link to='/users/register' className='myLinks'>Sign up</Link>
          <Link to='/users/login' className='myLinks'>Sign in</Link>
        </>
      )}
    </nav>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/posts' element={<AllPosts handleDetailsClick={handleDetailsClick} mytoken={mytoken}/>}/>
      <Route path='/details/:id' element={<SinglePost selectedPost={selectedPost} mytoken={mytoken}/>}/>
      <Route path='/users/register' element={<RegisterUser setMyToken={setMyToken}/>} />
      <Route path='/users/login' element={<SignInUser setMyToken={setMyToken}/>}/>
      <Route path='/user/post' element={<UserPosts mytoken={mytoken}/>}/>
    </Routes>
    </>
  )
}

export default App
