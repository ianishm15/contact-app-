import React,{useState,useEffect} from "react";
// import {uuid} from 'uuidv4'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAE_KEY="contacts";
  const[contacts,setContacts]=useState([]);

  const AddContactHandler=(contact)=>{
  setContacts([...contacts,contact]);
  }
  useEffect(()=>{
   const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAE_KEY));
   if(retriveContacts) setContacts(retriveContacts)  
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="ui container">
      <Router>
      <Routes>
      {/* <Route path="/" component={Header}/> */}
      <Route path="/add" element={<AddContact/>}/>
      <Route path="/list" element={<ContactList/>}/>
      {/* <AddContact AddContactHandler={AddContactHandler}/> */}
      {/* <ContactList contacts={contacts}/> */}
      </Routes>
      </Router>
    </div>
  );
  }
export default App;
