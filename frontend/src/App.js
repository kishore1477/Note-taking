import './App.css';
import Navbar from './component/nav/Navbar';
// import { Route, Router, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import Notes from './component/body/Notes';
import Home from './component/body/Home';
import Login from './component/nav/Login';
import Signup from './component/nav/Signup';
import AddNote from './component/body/AddNote';
import Footer from './component/body/Footer';
import SendEmail from './component/nav/SendEmail';
import NoteState from './context/NoteState';
import About from './component/nav/About';
import Contact from './component/nav/Contact';
import Profile from './component/nav/Profile';
import ChangePassword from './component/nav/ChangePassword';
import Category from './component/body/Category';
import NoteItem from './component/body/NoteItem';
import PasswordReset from './component/nav/PasswordReset';
import Alert from './component/Alert';

function App() {
  return (
  <>
{/* <Navbar/> */}
<NoteState>
<Router>
  <Navbar/>
  <Alert/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/notes" element={<Notes />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Signup />}/>
      <Route path="/addNote" element={<AddNote />}/>
      <Route path="/sendemail" element={<SendEmail />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/changePass" element={<ChangePassword />}/>
      <Route path="/category/:cat" element={<Category />}/>
      <Route path="/noteItem/:id" element={<NoteItem />}/>
      <Route path="/passwordReset/:id/:token" element={<PasswordReset />}/>


   
    </Routes>
    <Footer/>
  </Router>
  </NoteState>
  </>
  );
}

export default App;
