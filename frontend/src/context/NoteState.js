import React, {useState,useReducer,useEffect} from 'react'
import Contex from './CreateContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
// import { HeadProvider, Title, Link, Meta } from 'react-head';
// import {useNavigate} from 'react-router-dom';
const NoteState = (props) => {

const [alert, setAlert] = useState(null);
const [user, setUser] = useState("");
const [forcereducer, setforceUpdate] = useReducer(x => x + 1, 0);

useEffect(() => {
  getNote()
}, [forcereducer]);
  const [show, setShow] = useState(false);
  const [note, setnote] = useState({id : "",etitle : "", edesc:"",ecat:"",eurl:""})

  const [notes, setNotes] = useState([])
 
// 😍 Alert

const showAlert = (type,message)=>{
  setAlert({
    msg:message,
    typ:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 5000);
  }
  // 📝 GET 

  const getUser = async()=>{

    // express api login token
    const headers = {
      'Authorization':localStorage.getItem('token')
    }
  
    let resUser = await fetch('https://kind-cyan-kitten-kit.cyclic.app/api/auth/loggedUserData', { headers,  method:"POST"})
    
    if(!resUser.ok){
      
    }
    let resUserjson = await resUser.json()
    setUser(resUserjson)
    
    // let dataa = resjson.data
    // 


    
  }
   
    const getNote = async()=>{

      // express api login token
      const headers = {
        'Authorization':localStorage.getItem('token')
      }
 
      let res = await fetch('https://kind-cyan-kitten-kit.cyclic.app/api/notes/getNote', { headers})
      
      if(!res.ok){
        
      }
      let resjson = await res.json()
      
      // let dataa = resjson.data
      // 

      setNotes(resjson)
 
      
    }
  // ✍ Create
                        //  createNote
const createNote = async(data) =>{
  const res = await fetch('https://kind-cyan-kitten-kit.cyclic.app/api/notes/createNote',{  method: 'POST',headers: {
    'Authorization':localStorage.getItem('token'),
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)})
  return res
}

                // Auth
const Signup  = async(data)=>{
  const res = await fetch('https://kind-cyan-kitten-kit.cyclic.app/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
  
  })

  return res
}
const login = async(data) =>{
  const res = await fetch('https://kind-cyan-kitten-kit.cyclic.app/api/auth/login',{  method: 'POST',headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)})
  return res
}


  // ✔😍 Update 
        const editNote = async(id,title,desc, catgry,ulr)=>{
          
     const rawResponse = await fetch(`https://kind-cyan-kitten-kit.cyclic.app/api/notes/updateNote/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        
          title: title,
          description : desc,
         category:catgry,
         url:ulr
  
      })
    });
    // let json =  await rawResponse.json()
    
    if(!rawResponse.ok){
      showAlert("danger", "Note Not edited")
    }else{
      showAlert("success", "Note  edited Successfully")

    }
  
        }
       

const handleNoteEdit =(existingData)=>{
  handleShow()

  setnote({id :existingData.id, etitle:existingData.title,edesc:existingData.descc,ecat:existingData.catg,  eurl:existingData.urll})
}
const onChange =(e)=>{
  setnote({...note, [e.target.name] : e.target.value})
  
      }
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleUpdateClick =()=>{
  // alert("handleUpdateClick")
  editNote(note.id, note.etitle, note.edesc, note.ecat,note.eurl)
  handleClose()
  setforceUpdate()
}
// 😋 Delete
const handleDelete = async(id)=>{
   
  // API Call
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  let res = await fetch(`https://kind-cyan-kitten-kit.cyclic.app/api/notes/deleteNote/${id}`, { headers, method :"DELETE" })
  if(!res.ok){
    showAlert("danger", "Note not deleted")
  }else{
    showAlert("success", "Note deleted Successfully")
    setNotes(notes)
    setforceUpdate()

  }

 
}



  return (
    <>
    <Button  hidden  variant="primary" onClick={handleShow}>
Launch static backdrop modal
</Button>

<Modal show={show} onHide={handleClose} backdrop="static"keyboard={false}>
<Modal.Header closeButton>
  <Modal.Title>Update Note here!</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Title</Form.Label>
<Form.Control type="text" placeholder="title" name='etitle'onChange={onChange}  value ={note.etitle}   />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder="description" name='edesc' onChange={onChange} value ={note.edesc} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Url</Form.Label>
<Form.Control type="text" placeholder="url"  name ='eurl'onChange={onChange} value ={note.eurl} />
</Form.Group>


</Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleUpdateClick} >Update Note</Button>
  {/* <Button variant="primary" onClick={()=> {let res = handleUpdateClick()
  res&& setforceUpdate()}} >Update Note</Button> */}
</Modal.Footer>
</Modal>



 
      
    <Contex.Provider value ={{ handleDelete, getNote,notes,showAlert, alert,handleNoteEdit,editNote,getUser, createNote, user, Signup, login}}>
        {props.children}
    </Contex.Provider>
    </>
  )
}

export default NoteState