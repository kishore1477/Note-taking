import React, {useState, useRef, useContext} from 'react'
import { RiOpenArmFill } from 'react-icons/ri';
import { Link } from 'react-scroll';
import {BiEditAlt} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useParams} from "react-router-dom";
import Contex from '../../context/CreateContext';

const NoteItem = () => {
    const [open, setOpen] = useState(false);
  const context = useContext(Contex);
const {notes, editNote } = context
const {id} = useParams()

var noteItem = []
notes.map((item)=>{
  if(item._id === id){
    // return item
    noteItem.push(item)

  }
})

    const  handleDelete = ()=>{
     
   }
    const  handleEdittoggle = ()=>{
  
        setOpen(!open)
    }
    const handleUpdate = ()=>{
      editNote()
      setOpen(!open)
    }
    
  return (
   <section  className="text-gray-600 body-font " style={{userSelect: 'auto'}}>
  <div id='update' className="container mx-auto flex px-5 py-24 items-center justify-center flex-col" style={{userSelect: 'auto'}}>
  {noteItem && noteItem.map((item)=>{

return <>
 <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={`${item.url}`} style={{userSelect: 'auto'}} />
    <div className="text-center lg:w-2/3 w-full" style={{userSelect: 'auto'}}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{userSelect: 'auto'}}>{item.title}</h1>
      <p className="mb-8 leading-relaxed" style={{userSelect: 'auto'}}>{item.description}</p>
      
    </div>

</>
})}
   
  </div>


 
  
</section>

  )
}

export default NoteItem