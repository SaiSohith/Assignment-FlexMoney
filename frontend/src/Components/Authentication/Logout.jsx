import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Logout() {
  var navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('details')
        navigate("/");
    }, [])
    
  return (
    <div>

    </div>
  )
}
