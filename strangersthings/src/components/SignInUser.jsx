import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignInUser = ({setMyToken}) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


  const signInUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
      const data = await response.json();
      if(data.success){
        setUsername('');
        setPassword('')
        setMyToken(data.data.token)
        navigate('/');
      }
      else{
        alert(`couldnt sign in user :/`)
      }
  }
  return(
    <>
    <h1>Sign in</h1>
      <form onSubmit={signInUser} className="user-post-form">
        <label>
          Username: <input value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}



export default SignInUser;
