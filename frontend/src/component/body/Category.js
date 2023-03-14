import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {BiEditAlt} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import Contex from '../../context/CreateContext';
import Swal from 'sweetalert2'
import { useParams} from "react-router-dom";

const Category = () => {
  const context = useContext(Contex);
  const {handleNoteEdit, notes, handleDelete, getNote} = context
  
const {cat} = useParams()

const category = cat.split("-").join(" ")
const uppercaseWords = category => category.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
var catItem = []
notes.map((item)=>{
  if(item.category === category){
    // return item
    catItem.push(item)

  }
})


  const  handleDeleteNote= async(id)=>{
    const res  = await Swal.fire({
       title: 'Confirm',
       text: 'Are you sure want to delete this note?',
       icon: 'info',
       confirmButtonText: 'Continue',
       showCancelButton: true,
     })
     if(res.isConfirmed){
   await handleDelete(id)
   await getNote()
       Swal.fire(
         'Deleted!',
         'Your note has been deleted.',
         'success'
       )
     }else{
       Swal.fire(
         'Cancelled',
         'Your note is safe :)',
         'error'
       )
     }
     
   }
   
  return (
    <div className='container'>
     <div className=" text-3xl md:text-5xl  mb-4 md:mb-8 text-center font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-violet-500 mt-1   ">
           {uppercaseWords(category)} Notes
            </span>
          </div>
    
    
    <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
    <div className="container md:px-5 md:py-24 mx-auto" style={{userSelect: 'auto'}}>
    <div className="flex flex-wrap" style={{userSelect: 'auto'}}>

{catItem?<>{catItem.map((item,i)=>{
  return  <div className="p-4  md:w-1/2 xl:w-1/3" style={{userSelect: 'auto'}}>
   <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style=
  
  {{userSelect: 'auto'}}>
     <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`${item.url}`} alt={`${item.title} image`} style={{userSelect: 'auto'}} />
     <div className="p-6" style={{userSelect: 'auto'}}>
       <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{userSelect: 'auto'}}>{item.category}</h2>
       <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{userSelect: 'auto'}}>{item.title}</h1>
  
       <p className="leading-relaxed mb-3" style={{userSelect: 'auto'}}>{item.description}</p>
       <div className="flex items-center flex-wrap " style={{userSelect: 'auto'}}>
  <Link to ={`/noteItem/${item._id}`} className='no-underline text-black'>
  
       <a href='/#' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" style={{userSelect: 'auto'}}>Read More
           <svg className="w-4 h-4 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{userSelect: 'auto'}}>
             <path d="M5 12h14" style={{userSelect: 'auto'}} />
             <path d="M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
           </svg>
         </a>
  </Link>
  <span className="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" style={{userSelect: 'auto'}}>
 
     <BiEditAlt size = {25} className ="mr-4 cursor-pointer" onClick={() =>handleNoteEdit({id:item._id, title:item.title, descc:item.description, urll:item.url})}  />
         </span>
         <span className="text-gray-900 inline-flex items-center leading-none text-sm cursor-pointer" style={{userSelect: 'auto'}}>
          
     <RiDeleteBin6Line size = {25} className ="mr-4" onClick={()=>handleDeleteNote(item._id)}/>
         </span>
       </div>
     </div>
   </div>
  </div>
        })}</>:<><div>Please add new note in {category}</div> </>}
  
     
  
  
       
      </div>

    </div>
  </section>
  </div>
  )
}

export default Category