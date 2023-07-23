import { useState } from "react";




const SignInUser = () => {

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
      console.log(data)
      if(data.success){
        setUsername({username: ''});
        setPassword({password: ''})
        alert(`user signed in successfully ${data.message}`)
      }
      else{
        console.log(`couldnt sign in user :/`)
      }
  }
  return(
    <>
      <form onSubmit={signInUser}>
        <label>
          Username: <input value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          Password: <input value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}



export default SignInUser;