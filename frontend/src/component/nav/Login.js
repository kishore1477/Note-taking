import React,{useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Contex from '../../context/CreateContext';

const Login = () => {
  const contex = useContext(Contex)

  const {showAlert, login}  = contex
  const [open, setOpen] = useState(false);
const [loginData, setLoginData] = useState({logEmail:"",logPass:""});
const [Error, setError] = useState("")
const [Success, setSuccess] = useState("");
const navigate = useNavigate();

const onchange = (e)=>{
  const  {name, value} = e.target
  setLoginData({...loginData, [name]:value})
  
}
const handleLoginForm =async(e)=>{
  e.preventDefault()
  const {logEmail, logPass} = loginData
 
  const data ={
    email:logEmail,
    password:logPass
  }
  
  const res = await login(data)
  
 
  
  const json = await res.json()

  if(res.ok){
    
    showAlert('success', json.success)
    localStorage.setItem('token', json.loginToken)
    setLoginData({logEmail:"",logPass:""})
    navigate('/');
  }else{

    showAlert('danger', json.fail)
  }
 
    
  
}
  const toggle = ()=>{
    setOpen(!open)

  }
 
  return (
  <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src="https://thumbs.dreamstime.com/b/login-icon-isolated-elegant-yellow-round-button-abstract-illustration-login-icon-elegant-yellow-round-button-101830734.jpg" alt="logo" />
  LoGin
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
          Login to your account
        </h1>
       
        <form className="space-y-4 md:space-y-6" onSubmit={handleLoginForm}>
          <div className='relative'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="logEmail" id="logEmail" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-3 pl-10" placeholder="name@company.com" required  value={loginData.logEmail} onChange={onchange}/>
            
            <div className = 'absolute  left-1 top-9 text-purple-700 text-2xl'>
{/* <RiShieldUserFill/> */}
<AiOutlineMail/>
              </div>
          </div>
          <div className = 'relative'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type={open?'text':'password'} name="logPass" id="logPass" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-3 pl-10" required  value={loginData.logPass} onChange={onchange} />

            <div className = 'text-2xl absolute right-1 top-9 text-yellow-500 cursor-pointer'>
              {
                open? <AiFillEye  onClick={toggle}/>: <AiFillEyeInvisible  onClick={toggle}/>
              }
            
            </div>
            <div className = ' absolute left-1 top-9  text-purple-700 text-2xl'> 
              <RiLockPasswordLine/>
            </div>
          </div>
          <div className="flex items-center justify-between">
            
            <Link to ='/sendemail'>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </Link>
            
          </div>
          <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <Link to = '/register'> <a href="#" className="font-medium text-yellow-600 hover:underline dark:text-primary-500 ">Register</a> </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login