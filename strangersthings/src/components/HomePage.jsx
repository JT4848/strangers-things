import { Link } from "react-router-dom";



const Homepage = () => {
  return(
    <section className="homePage">
      <h1>Welcome to Marketplace</h1>
      <h2>Please click the Marketplace link to shop</h2>
      <Link to='/posts' className='homePageLink'>Marketplace</Link>
    </section>
  )
}



export default Homepage;
