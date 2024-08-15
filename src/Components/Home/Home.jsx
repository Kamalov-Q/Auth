/* eslint-disable no-unused-vars */
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home'>
      <h1>Welcome to the Home Page</h1>
      <h1>This is the Home Page</h1>
      <Link to={'/login'} className='login' style={{textDecoration: "none"}}>Go to Login</Link>
      <Link to={'/register'} style={{textDecoration: "none", margin:"10px"}} className='register'>Go to Register Page</Link>
    </div>
  )
}

export default Home
