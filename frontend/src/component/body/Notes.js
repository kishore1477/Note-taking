import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Contex from '../../context/CreateContext'
import Swal from 'sweetalert2'
import {BiEditAlt} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
const Notes = () => {
  const {handleCatEdit, notes} = useContext(Contex);

const unique = [...new Set(notes.map(item=> item.category))];




const handleDelete = async()=>{
 const res  = await Swal.fire({
    title: 'Confirm',
    text: 'Are you sure want to delete this category?',
    icon: 'info',
    confirmButtonText: 'Continue',
    showCancelButton: true,
  })
  if(res.isConfirmed){
    Swal.fire(
      'Deleted!',
      'Your category has been deleted.',
      'success'
    )
  }else{
    Swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
  
}
  return (
  <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
  <div className="container md:px-5 md:py-24 mx-auto" style={{userSelect: 'auto'}}>
    <div className="flex flex-wrap" style={{userSelect: 'auto'}}>

      {unique && unique.map((item,i)=>{
return  <div className="p-4  md:w-1/2 xl:w-1/3" style={{userSelect: 'auto'}}>







<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style=

{{userSelect: 'auto'}}>
  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" style={{userSelect: 'auto'}} />
  <div className="p-6" style={{userSelect: 'auto'}}>
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{userSelect: 'auto'}}>{item}</h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{userSelect: 'auto'}}></h1>

    <p className="leading-relaxed mb-3" style={{userSelect: 'auto'}}></p>
    <div className="flex items-center flex-wrap " style={{userSelect: 'auto'}}>
 
<Link to ={`/category/${item.split(" ").join("-")}`} className='no-underline text-black'>

    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" style={{userSelect: 'auto'}}>View Note
        <svg className="w-4 h-4 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{userSelect: 'auto'}}>
          <path d="M5 12h14" style={{userSelect: 'auto'}} />
          <path d="M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
        </svg>
      </a>
</Link>

    </div>
  </div>
</div>








</div>
      })}
     


    
    </div>
  </div>
</section>

  )
}

export default Notes