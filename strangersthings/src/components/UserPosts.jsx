import { useState } from "react";
import { Link } from "react-router-dom";





const UserPosts = ({ mytoken }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState('');

  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;



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
    console.log(data)
    if(data.success){
      setTitle('')
      setDescription('');
      setPrice('');
      setWillDeliver('');
      alert(`${title} was successfully created :)`)
    }
    else{
      alert(`Could not post item`)
    }
  }
  console.log(`userposts token ${mytoken}`)
  return(
    <>
      <form onSubmit={userPosts}>
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
      <Link to='/posts' className='userPostMarketplaceLink'>Back to marketplace</Link>
    </>
  )
}




export default UserPosts;
