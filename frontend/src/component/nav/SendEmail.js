import React, {useState} from 'react'

const SendEmail = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [failMsg, setFailsMsg] = useState("");
  const [emailData, setEmail] = useState("")

const handleEmailSubmit =async(e)=>{
 
  e.preventDefault()
  
const data = {
  email:emailData
}
const res = await fetch('https://kind-cyan-kitten-kit.cyclic.app/api/auth/sendEmail', {method: 'POST',headers: {
 
  'Content-Type': 'application/json'
}, body:JSON.stringify(data)})
  const Resjson =  await res.json()
  
  if(!res.ok){
    setFailsMsg(Resjson.msg)
  }
  setSuccessMsg(Resjson.msg)
  setEmail("")
  setTimeout(() => {
    setFailsMsg("")
    setSuccessMsg("")       
    }, 3000)
}
  return (
    <div className='container mx-auto  bg-gray-50 dark:bg-yellow-300  mt-4 shadow-sm'>
 
    <div className="flex flex-col items-center justify-center  lg:py-0">
        <a href="/#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/note-plus-3199351-2665696.png" alt="logo" />
    SendEmail
        </a>
        </div>
        <div className='h-4 '>
          {failMsg && <p className='text-white-500   bg-red-300 rounded text-center '>{failMsg}</p>}

</div>
        <div className='h-4 '>
          {successMsg && <p className='text-white-500   bg-green-300 rounded text-center '>{successMsg}</p>}

</div>
        <form className="space-y-4 md:space-y-6" onSubmit = {handleEmailSubmit}>
        <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required  onChange={(e) => setEmail(e.target.value)} value = {emailData}/>
              </div>
            
           <div className="flex justify-center items-center ">
  
  
              <button type="submit" className="  w-1/3 text-black bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send</button>
              
           </div>
             
            
       
        </form>
             
  
    </div>
  )
}

export default SendEmail