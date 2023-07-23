import { useEffect, useState } from 'react'



const AllPosts = () => {
  const [forSalePosts, setForSalePosts] = useState([]);
  
  const cohortName = "2306-FSA-ET-WEB-FT-SF";
  const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API_URL}/posts`)
      const data = await response.json();
      setForSalePosts(data.data.posts)
    }
    fetchProducts();
  })


  return(
    <>
      {
        forSalePosts.map((forSale) => {
          return(
            <section key={forSale._id}>
              <h2>{forSale.title}</h2>
              <h6>{forSale.description}</h6>
              <h6>Price: {forSale.price}</h6>
              <h2>{forSale.willDeliver}</h2>
              <button>Details</button>
            </section>
          )
        })
      }
    </>
  )
}


export default AllPosts;