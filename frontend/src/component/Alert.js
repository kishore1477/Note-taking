  

import React, {useContext} from 'react'
import Contex from '../context/CreateContext';
const Alert = () => {
    const contex = useContext(Contex);
    const {alert } = contex
   
     const capitalize = (word) =>{
          const  lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
   
  return (
    <>
<> <div className='container'>
    
        <div >
 { alert &&  <div className={`alert alert-${ alert.typ} alert-dismissible fade show`} role="alert">
  <strong> {capitalize(alert.typ)}</strong>  : { alert.msg}
</div>}
</div>
    </div></>
    </> 
  )
 
  }
export default Alert