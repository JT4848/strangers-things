import { Link } from "react-router-dom";





const SinglePost = ({selectedPost}) => {
  
console.log(selectedPost)
  return(
    <>
      {
        selectedPost && (
        <section>
          <h2>This posts details</h2>
          <h4>{selectedPost.title}</h4>
          <h4>{selectedPost.description}</h4>
          <h4>{selectedPost.price}</h4>
          <h4>{selectedPost.willDeliver}</h4>
          <h4>Post id: {selectedPost._id}</h4>
          <Link to='/posts' className='singlePostMarketplaceLink'>Back to marketplace</Link>
        </section>
        )
      }
    </>
  )
}



export default SinglePost;
