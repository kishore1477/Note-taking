import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

const PasswordReset = () => {
const {id, token} = useParams()


  const [changePassData, setChangePassData] = useState({pwd:"", cpwd:""});
  const [successMsg, setSuccessMsg] = useState("");
  const [failMsg, setFailsMsg] = useState("");
  const onChange = (e)=>{
const {name, value} = e.target

setChangePassData({...changePassData, [name]: value})
  }
  const [open, setOpen] = useState(false);
  const [copen, setCOpen] = useState(false);
  const toggle = ()=>{
    setOpen(!open)

  }
  const ctoggle = ()=>{
    setCOpen(!copen)

  }
 const handleChangePassSub = async(e)=>{
  e.preventDefault()
   
  const  {pwd,cpwd} = changePassData
  const data = {
    password: pwd,
    password_confirm :cpwd
  }
  const PassRes = await fetch(`https://kind-cyan-kitten-kit.cyclic.app/api/auth/passwordReset/${id}/${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
  body: JSON.stringify(data)
    // body: '{"password":"12346","password_confirm":"12346"}'
  })
  
  const PassResJson = await PassRes.json()
  
  if(!PassRes.ok){
    setFailsMsg(PassResJson.msg)
  }
  setSuccessMsg(PassResJson.msg)
  setChangePassData({pwd:"", cpwd:""})

    
 }
    
  setTimeout(() => {
  setFailsMsg("")
  setSuccessMsg("")       
  }, 2000)
  return (
    <div className='container mx-auto p-8 mb-1 bg-gray-50 dark:bg-yellow-300  mt-4 shadow-sm'>
 
    <div className="flex flex-col items-center justify-center  lg:py-0">
      {/* email heading */}
        <div href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/change-password-1890199-1600573.png" alt="logo" />
   Password Reset
        </div>
        </div>
        <div className='h-4 '>
          {failMsg && <p className='text-white-500   bg-red-300 rounded text-center '>{failMsg}</p>}

</div>
        <div className='h-4 '>
          {successMsg && <p className='text-white-500   bg-green-300 rounded text-center '>{successMsg}</p>}

</div>
        <form className="space-y-4 md:space-y-6 mt-2" onSubmit={handleChangePassSub}>
        <div className='relative'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type={open?"text":"password"} name="pwd" id="password" onChange={onChange} value ={changePassData.pwd} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="......"  />

                <div className = 'text-2xl absolute right-1 top-9 text-yellow-500 cursor-pointer'>
              {
                open? <AiFillEye  onClick={toggle}/>: <AiFillEyeInvisible  onClick={toggle}/>
              }
            
            </div>
              </div>
        <div className='relative'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input type={copen?"text":"password"} name="cpwd" id="cpassword"onChange={onChange} value ={changePassData.cpwd} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="......"  />

                <div className = 'text-2xl absolute right-1 top-9 text-yellow-500 cursor-pointer'>
              {
                copen? <AiFillEye  onClick={ctoggle}/>: <AiFillEyeInvisible  onClick={ctoggle}/>
              }
            
            </div>
              </div>
     
            
           <div className="flex justify-center items-center ">
  
  
              <button type="submit" className="  w-1/3 text-black bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
              
           </div>
             
            
       
        </form>
             
  
    </div>
  )
}

export default PasswordReset