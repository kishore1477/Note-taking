import React, {useState} from 'react'
const Contact = () => {
  const [contactData, setContactData] = useState({name:"", email:"", message:""});
  const [successMsg, setSuccessMsg] = useState("");
  const [failMsg, setFailsMsg] = useState("");
  const onChange = (e)=>{
    const  {name, value} = e.target
    setContactData({...contactData, [name]: value})
  }
  const handlesubmitData = async(e)=>{
    e.preventDefault()
    
    const {name, email, message} = contactData
const data = {
  name:name,
  email:email,
  msg:message
}
    
    
  const contactRes = await  fetch('https://kind-cyan-kitten-kit.cyclic.app/api/auth/contact',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(data)
      
    
      
    })

    const contactResJson = await contactRes.json()
    
    
    if(!contactRes.ok){
      setFailsMsg(contactResJson.msg)
    }
    setSuccessMsg(contactResJson.msg)   
    setContactData({name:"", email:"", message:""})    
    setTimeout(() => {
      setFailsMsg("")
      setSuccessMsg("")       
      }, 3000)
     
  }

  
  return (
<section className="text-gray-600 body-font relative" style={{userSelect: 'auto'}}>
  <div className="container px-5 py-2 mx-auto" style={{userSelect: 'auto'}}>
    <div className="flex flex-col text-center w-full mb-12" style={{userSelect: 'auto'}}>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{userSelect: 'auto'}}>Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{userSelect: 'auto'}}><div className='h-4 '>
          {failMsg && <p className='text-white-500   bg-red-300 rounded text-center '>{failMsg}</p>}

</div>
        <div className='h-4 '>
          {successMsg && <p className='text-white-500   bg-green-300 rounded text-center '>{successMsg}</p>}

</div></p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto" style={{userSelect: 'auto'}}>
      <div className="flex flex-wrap -m-2" style={{userSelect: 'auto'}}>
        <div className="p-2 w-1/2" style={{userSelect: 'auto'}}>
          <div className="relative" style={{userSelect: 'auto'}}>
            <label htmlFor="name" className="leading-7 text-sm text-gray-600" style={{userSelect: 'auto'}}>Name</label>
            <input type="text" id="name" name="name" value={contactData.name} onChange ={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{userSelect: 'auto'}} />
          </div>
        </div>
        <div className="p-2 w-1/2" style={{userSelect: 'auto'}}>
          <div className="relative" style={{userSelect: 'auto'}}>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600" style={{userSelect: 'auto'}}>Email</label>
            <input type="email" id="email" name="email"  value={contactData.email} onChange ={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{userSelect: 'auto'}} />
          </div>
        </div>
        <div className="p-2 w-full" style={{userSelect: 'auto'}}>
          <div className="relative" style={{userSelect: 'auto'}}>
            <label htmlFor="message" className="leading-7 text-sm text-gray-600" style={{userSelect: 'auto'}}>Message</label>
            <textarea id="message" name="message"  value={contactData.message} onChange ={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" style={{userSelect: 'auto'}} defaultValue={""} />
          </div>
        </div>
        <div className="p-2 w-full" style={{userSelect: 'auto'}}>
          <button type='submit' onClick={handlesubmitData} className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg" style={{userSelect: 'auto'}}>Send</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" style={{userSelect: 'auto'}}>
          <a href='/#' className="  no-underline text-black mt-5" style={{userSelect: 'auto'}}>kishoorjaipal477@gmail</a>
          <p className="leading-normal mb-5" style={{userSelect: 'auto'}}>Kishore Kumar.
            <br style={{userSelect: 'auto'}} />IoBM, Karachi, Sindh 75190
          </p>
          <span className="inline-flex" style={{userSelect: 'auto'}}>
            <a href='/#' className="text-gray-500" style={{userSelect: 'auto'}}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" style={{userSelect: 'auto'}} />
              </svg>
            </a>
            <a  href='/#' className="ml-4 text-gray-500" style={{userSelect: 'auto'}}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" style={{userSelect: 'auto'}} />
              </svg>
            </a>
            <a href='/#' className="ml-4 text-gray-500" style={{userSelect: 'auto'}}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} style={{userSelect: 'auto'}} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" style={{userSelect: 'auto'}} />
              </svg>
            </a>
            <a href='/#' className="ml-4 text-gray-500" style={{userSelect: 'auto'}}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" style={{userSelect: 'auto'}} />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
 
  )
}

export default Contact