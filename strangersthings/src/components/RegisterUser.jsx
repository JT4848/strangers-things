import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";




const RegisterUser = ({ setMyToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


  
    const registerUser = async (e) => {
      e.preventDefault();
      const response = await fetch(`${API_URL}/users/register`, {
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
        alert(`user registered successfully ${data.data.message}`)
      }
      else{
        alert(`couldnt create new user :/`)
      }
    }
    
  return(
    <>
    <h1>Sign up</h1>
      <form onSubmit={registerUser} className="user-post-form">
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default RegisterUser;
