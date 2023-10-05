import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";





const UserPosts = ({ mytoken }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState('');
  const navigate = useNavigate();

  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

  if(!mytoken){
    navigate('/')
  }

  const userPosts = async (e) => {
    console.log(mytoken)
    e.preventDefault();
    const repsonse = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mytoken}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver
        }
      })
    })
    const data = await repsonse.json();
    if(data.success){
      setTitle('')
      setDescription('');
      setPrice('');
      setWillDeliver('');
      alert(`${title} was successfully created :)`)
      navigate("/posts");
    }
    else{
      alert(`Could not post item`)
    }
  }
  return(
    <>
      <form onSubmit={userPosts} className="user-post-form">
        <label>
          Title: <input value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
          Description: <input value={description} onChange={e => setDescription(e.target.value)}/>
        </label>
        <label>
          Price: <input value={price} onChange={e => setPrice(e.target.value)}/>
        </label>
        <label>
          Will deliver: <input value={willDeliver} onChange={e => setWillDeliver(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}




export default UserPosts;
