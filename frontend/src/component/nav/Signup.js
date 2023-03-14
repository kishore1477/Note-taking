import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { RiShieldUserFill } from 'react-icons/ri';
import { validEmail,validPassword } from '../body/Regex';
import Contex from '../../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const contex = useContext(Contex)
  const {Signup, showAlert} = contex
  const [open, setOpen] = useState(false);
  const [copen, setCOpen] = useState(false);
const [signData, setSigData] = useState({name:"",email:"",pwd:"",cpwd:""})
 
const [Error, setError] = useState("");
const onchange = (e)=>{
  const  {name, value} = e.target
  setSigData({...signData, [name]: value})
  // 
}
  const handleformSubmit = async(e) => {
    e.preventDefault()
    const {name,email,pwd,cpwd} = signData


const data = {
  name:name,
  email:email,
  password:pwd,
  password_confirm:cpwd
}

const  res = await Signup(data)

const json = await res.json()

if(res.ok){
  
  showAlert('success', json.success)

  
  setSigData({name:"",email:"",pwd:"",cpwd:""})
  navigate('/login');
}else{
  showAlert('danger', json.fail)

}

  }
 

  const toggle = ()=>{
    setOpen(!open)

  }

  const ctoggle = ()=>{
    setCOpen(!copen)

  }
  if(Error){

    
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-18 h-14 mr-2" src="https://static.vecteezy.com/system/resources/previews/002/290/642/non_2x/register-now-icon-or-logo-badge-template-3d-modern-with-warning-mark-in-yellow-color-illustation-vector.jpg" alt="logo" />
      Register 
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
             Register YourSelf
          </h1>
<div className='h-4 '>
          {Error && <p className='text-white-500   bg-red-300 rounded text-center '>{Error}</p>}

</div>
          <form className="space-y-4 md:space-y-6" >
          <div className='relative'>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-3 pl-10" placeholder="XYZ"  onChange={onchange}  value={signData.name}/>


              <div className = 'absolute  left-1 top-9 text-purple-700 text-2xl'>
{/* <RiShieldUserFill/> */}
<FaUserAlt/>
              </div>
            </div>
            <div className='relative'>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-3 pl-10" placeholder="name@company.com"   onChange={onchange}  value={signData.email}
/>
<div className = 'absolute  left-1 top-10 text-purple-700 text-2xl '>
  <AiOutlineMail/>
</div>

            </div>
           
            <div className='relative'>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type={open?'text':'password'} name="pwd" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-3 pl-10" value={signData.pwd}  onChange={onchange}  />
            <div className = 'text-2xl absolute right-1 top-9 text-yellow-500 cursor-pointer' >
              {
                open? <AiFillEye  onClick={toggle}/>: <AiFillEyeInvisible  onClick={toggle}/>
              }
             
             
            </div>
            
            <div className = ' absolute left-1 top-9  text-purple-700 text-2xl'> 
              <RiLockPasswordLine/>
            </div>
            </div>
       
            <div className='relative'>
              <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input type={copen?'text':'password'} name="cpwd" id="cpassword" placeholder="••••••••" className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white pr-3 pl-10 focus:border-yellow-600 border-yellow-300"  onChange={onchange}   value={signData.cpwd} />
              <div className = 'text-2xl absolute right-1 top-9 text-yellow-500 cursor-pointer'>
              {
                copen? <AiFillEye  onClick={ctoggle}/>: <AiFillEyeInvisible  onClick={ctoggle}/>
              }
                
             
            </div>
            <div className = 'absolute left-1 top-9  text-purple-700 text-2xl'> 
              <RiLockPasswordLine/>
            </div>
            </div>
         <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleformSubmit}>Register</button>
            
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Do have an account yet? <Link to = '/login' className='hover:text-yellow-600'> <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"></a>Login </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>









  )
}

export default Signup