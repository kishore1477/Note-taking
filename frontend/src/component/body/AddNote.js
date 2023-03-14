import React, { useContext, useState } from 'react';
import Contex from '../../context/CreateContext';

const AddNote = () => {
 const contex = useContext(Contex)
 const {createNote, showAlert, getNote} = contex
  const [AddNoteData, setNote] = useState({title:"", desc:"", catg:"", url:"", catgOther:""});
 

const onChange = (e)=>{
  const {name, value} = e.target
  
  setNote({...AddNoteData, [name]:value})
}
const handleformSubmit =async(e)=>{
  e.preventDefault()
const  {title, desc, catg, url , catgOther} = AddNoteData

  const data = {
    description:desc,
    title:title,
    category:catgOther.length>0?catgOther:catg,
    url:url

  }
 const res = await createNote(data)
  
 
  const json = await res.json()
  
  if(!res.ok){
    showAlert('danger', json.error)
    
    
  }else{
    showAlert('success', json.msg)
    setNote({title:"", desc:"", catg:"", url:"", catgOther:""})
    await getNote()
  }
   
}
  return (
<div className='container mx-auto mt-4  bg-gray-50 dark:bg-yellow-300 '>
 
  <div className="flex flex-col items-center justify-center  lg:py-0">
      <a href="/#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/note-plus-3199351-2665696.png" alt="logo" />
   Add Note
      </a>
      </div>
      
      <form className="p-1 md:p-5  space-y-1 md:space-y-6" onSubmit={handleformSubmit} >
      <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" name="title" id="title" value={AddNoteData.title} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500  w-full  p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz"  />
            </div>
            <div>
              <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea cols="30" rows="5" name ="desc" onChange={onChange} value={AddNoteData.desc}  className='"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500 block w-full  p-1 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
            
            </div>
           
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
             <select hidden = {AddNoteData.catg ==="other"}  value={AddNoteData.catg} onChange={onChange}  name = "catg"   className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500 block w-full   p-1 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                <option className='text-center' >--Select category--</option>
                <option value="web development">web development</option>
                <option value="App development" >App development</option>
                <option value="machine learning" >machine learning</option>
                <option value="other" >other</option>
             </select>
            </div>

            <div>
             
              <input type="text" name="catgOther" value={AddNoteData.catgOther}id="catgOther" onChange={onChange} hidden= {AddNoteData.catg !=="other"} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary-600 focus:border-secondary-500  w-full  p-1 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XYZ"  />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url (<small>optional</small>)</label>
              <input type="text" name="url"  onChange={onChange} value={AddNoteData.url}    id="text" placeholder="https://xyz.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full   p-1 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
         <div className="flex justify-center items-center ">


            <button type="submit" className="  w-1/3 text-black bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-1 py-2 md:px-5 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
            
         </div>
           
          
     
      </form>
           

  </div>

  )
}

export default AddNote