import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Data = () => {

    const [users,setUser]=useState([])

    useEffect(() => {
      const fetchAllUser=async ()=>{
      try{
          const res=await axios.get("http://localhost:8888/api/test")
          console.log(res);
          setUser(res.data)
        }
        catch(err){
          console.log(err);
        }
      }
      fetchAllUser()
    }, []);




  return (
    <div>
      <h1>Hello Users</h1>
      <div className="users">
        {users.map((user)=>(
          <div className="user"   key={user.id}>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
        <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  )
}

export default Data