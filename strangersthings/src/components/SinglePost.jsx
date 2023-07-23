import { Link } from "react-router-dom";





const SinglePost = ({selectedPost, mytoken}) => {
  
  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mytoken}`
      }
    })
    const data = await response.json();
    if(data.success){
      alert(`item successfully deleted`)
    }
    else{
      alert(`couldnt delete :/`)
    }
    return data;
  }

console.log(selectedPost)
  return(
    <>
      {
        selectedPost && (
        <section>
          <h2>This posts details</h2>
          <h4>{selectedPost.title}</h4>
          <h4>{selectedPost.description}</h4>
          <h4>Price: {selectedPost.price}</h4>
          <h4>{selectedPost.willDeliver}</h4>
          <h4>Post id: {selectedPost._id}</h4>
          <Link to='/posts' className='singlePostMarketplaceLink'>Back to marketplace</Link>
          <button onClick={() => deletePost(selectedPost._id)}>DELETE</button>
        </section>
        )
      }
    </>
  )
}



export default SinglePost;
