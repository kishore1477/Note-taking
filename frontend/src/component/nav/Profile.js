import React, {useRef, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const Profile = () => {
  const [category, setCategory] = useState({select:""});
  const [profileData, setProfileData] = useState({flname:"",gendr:"",selectdata:""});
  const [gender,setgender]=useState()

//  const handlegender=(e)=>{
//     setgender(e.target.value)
//   }
//   const onSelectChange =(e)=>{
//     setCategory({...category, [e.target.name] : e.target.value})
//     
//   }
  const onChange = (e)=>{
    const {name,value} = e.target
    setProfileData({...profileData, [name]:value})
    
        
  }

  const refFileInput = useRef(null)
  const handleFile =()=>{
    refFileInput.current.click()
  }
  const userEdit =()=>{

  }

    const handleloginform = (e)=>{
      e.preventDefault()
      
const { flname,select, gender}= profileData

      const options = {
        method: 'PUT',
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmZTA4MmM2ZWE2MDYzMDc1YmJlMmQ0In0sImlhdCI6MTY2MTI3NjQ1N30.ymi4jLC5m_eJIoqADEttPNC_1YlJ_yKCwFrAB2LEc1M',
          'Content-Type': 'application/json'
        },

        body: {name:flname,edu:select,gender:gender}
      };
      
      fetch('http://localhost:5000/api/auth/updateProfile/62fe082c6ea6063075bbe2d4', options)
        .then(response => response.json())
        
        .catch(err => console.error(err))

    }
  
    return (
<div className='container mt-50' style={{margin:"50px"}}>
       
        <div class="row">
    <div className="col-sm-5">   <Form>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" name = "flname" onChange={onChange} value={profileData.flname} />
     
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name = "email" onChange={onChange}  disabled value ="kishoorjaipal477@gmail.com"/>
     
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      {/* <Form.Control type="text"  name = "flname" onChange={onChange} value={profileData.flname} /> */}
      <Form.Label></Form.Label>
      <Form.Select aria-label="Default select example"  name ="select" onChange ={onChange}>
    <option>--Select education-- </option>
    <option value="matriculation" >Matriculation</option>
    <option value="Intermediate">Intermediate</option>
    <option value="Bachelor's">Bachelor's</option>
    <option value="Master's">Master's</option>
    <option value="Phd">Phd</option>
  </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> Gender</Form.Label> <br/>
    <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            id='radio'
            value='Male'
            onChange={onChange}

          />  
    <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            id="radio"
            value="Female"
            onChange={onChange}

          /> 
    </Form.Group>
    
   
   
  
  </Form>
  </div>
    <div className="col-sm-7 ">
    {/* <div className="col-sm-3 "> */}
      <h4>Profile Picture</h4>
      <small>Only png,jpg, jpeg max 234kb</small>
      <img  src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" className="img-fluid mb-0" style={{height:"80%", width:"80%"}} />
      {/* </div> */}
    
    {/* <div className="col-sm-3 text-end"> */}
     <OverlayTrigger   trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
    <Popover id="popover-positioned-bottom">
              {/* <Popover.Header as="h3">Popover bootom</Popover.Header> */}
              {/* <Popover.Body>
              </Popover.Body> */}

              <Button onClick={handleFile}  variant="light">Upload picture</Button> <br/>
              <Button onClick={handleFile}  variant="light">Remove picture</Button>
             <input type="file"  ref={refFileInput}  style={{display:'none'}}  accept=".jpg, .jpeg, .png" />
            </Popover>

           } >
{/* <FaUserEdit size={40}  color= '#231266' style={{cursor:'pointer',margin:"0px"}} /> */}
<button>Edit</button>
            </OverlayTrigger>
            {/* </div> */}

  </div>
  <div>

  <Button onClick={handleloginform} variant="primary" type="loginUp">
     Update Profile
    </Button>
  </div>
        </div>
        </div>
    )
}

export default Profile