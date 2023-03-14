import React ,{useContext, useEffect}from 'react'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import {useJwt} from "react-jwt"
import Contex from '../../context/CreateContext'
import { useNavigate } from 'react-router-dom';

import  { LinkContainer } from 'react-router-bootstrap';
const Navbar = () => {
  const navigate = useNavigate()
// const router = useRoutes()
  const {getUser,user, notes} = useContext(Contex);
  
  // useEffect(() => {
  //   getUser()
  // }, []);
  
 
  
  const token = localStorage.getItem('token')
  if(token){
    (
async () => {
  await getUser()
}

    )()
  }
  // const {decodedToken} = useJwt(token)

  
  const handleLogout = ()=>{
localStorage.removeItem('token')

navigate('/login')
  }
  return (
    <header className="text-gray-600 body-font sticky top-0 z-50 py-2  bg-purple-100 dark:bg-yellow-900" style={{ userSelect: 'auto' }}>
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center" style={{ userSelect: 'auto' }}>
        <a className=" no-underline flex title-font font-medium items-center text-gray-900  md:mb-0" style={{ userSelect: 'auto' }}>
          <img src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Note-Taking-App-icon.png" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24" style={{ userSelect: 'auto' }}>

          </img>
          <Link to='/' className = "no-underline text-black">
            <span className="ml-3 text-xl" style={{ userSelect: 'auto' }}>INoteBook</span>
          </Link>
        </a>
        <nav className="no-underline md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center " style={{ userSelect: 'auto' }}>
          <Link className="mr-5  no-underline text-black hover:text-yellow-500 " style={{ userSelect: 'auto' }} to={token?'/notes':'/login'}>Notes</Link>
          <Link className="mr-5 hover:text-yellow-500  no-underline text-black" style={{ userSelect: 'auto' }} to={token?'/addNote':'/login'}>Add Note</Link>
          <Link className="mr-5 hover:text-yellow-500  no-underline text-black" style={{ userSelect: 'auto' }} to='/about'>About</Link>
          <Link className="mr-5 hover:text-yellow-500  no-underline text-black" style={{ userSelect: 'auto' }} to='/contact'>Contact</Link>
         
         

          {/* drop down  */}
        

        </nav>
        {token?  <> <Dropdown className='hover:bg-purple-400 rounded'>
      <Dropdown.Toggle variant="yellow" id="dropdown-basic">
       {user.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <LinkContainer to = '/profile'>
        <Dropdown.Item >Profile</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to = '/changePass'>
        <Dropdown.Item >Change Password</Dropdown.Item>
        </LinkContainer>
        <Dropdown.Item onClick = {handleLogout} >Logout</Dropdown.Item>
   
      </Dropdown.Menu>
    </Dropdown></>:<> <Link to='/login'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" style={{ userSelect: 'auto' }}>Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24" style={{ userSelect: 'auto' }}>
              <path d="M5 12h14M12 5l7 7-7 7" style={{ userSelect: 'auto' }} />
            </svg>
          </button>
        </Link></>}
       
       


  </div >
</header >

  )
}

export default Navbar