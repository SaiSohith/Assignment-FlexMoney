import axios from "axios";
import React from "react";
import { useState } from "react";
import { Await, Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [user,setUser]=useState({
    id:null,
    name:"",    
  });


  const navigate = useNavigate();


  const handleChange=(e)=>{
    setUser((prev)=>({...prev,[e.target.name]:e.target.value}));
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8888/api/book",user)
      navigate("/")
    }
    catch(err){
      console.log(err) ;
    }
  }
  // console.log(user);
  return (
    <div className="form">
    <h1>Add New User to Test</h1>
    <input type="number" placeholder="id" onChange={handleChange} name="id"/>
    <input type="text" placeholder="name" onChange={handleChange} name="name"/>
    <button onClick={handleClick}>insert new user</button>
  </div>
  )
}

export default Add