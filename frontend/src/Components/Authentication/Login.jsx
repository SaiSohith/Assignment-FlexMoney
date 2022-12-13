import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
// import HomeHeader from '../HomeHeader/HomeHeader';
// import { CheckAdminCred, AuthenticateUser, AuthenticateVolunteer, AuthenticateOrg } from '../../../Services/AuthenticateService';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [passworderror, setpassworderror] = useState("")
    const [emailerror, setemailerror] = useState("")
    const [Errormessage, setErrormessage] = useState("")
    const [successmessage, setsuccessmessage] = useState("")
    // const [category, setcategory] = useState("")
    // const [categoryerror, setcategoryerror] = useState("")

    var navigate = useNavigate();

    useEffect(() => {
        setemail("")
        setpassword("")
        // const data=AuthenticateUser("9492481954")
        // console.log(data);
    }, [])

    // const LoginHandler = () => {
    //     const validateemail = ValidateEmail();
    //     const validatepwd = ValidatePassword();
    //     if (validateemail === false || validatepwd === false) {
    //         setErrormessage("Please check all the fields tharoughly")
    //         return;
    //     }
    //     else {
    //         AuthenticateTheUser();
    //     }
    // }

    const AuthenticateTheUser = () => {
        setsuccessmessage("")
        setemailerror("")
        setpassworderror("")
        const obj={
            "Email":email,
            "password": password
        }
        axios.post("http://localhost:8888/api/login",obj)
        .then((data) => {
            if (data.data.length===0) {
                console.log(data);
                setErrormessage("Invalid Credentials");
            }
            else {
                setsuccessmessage("Successfully logged in")
                        localStorage.setItem('details',JSON.stringify(data))
                        console.log(data);
                        setErrormessage("")
                        navigate("/");

            }
        })
        .catch((err) => {
            setErrormessage("Invalid Credentials");
            setsuccessmessage("")
        })

    }

    return (
        <div>
            {/* <HomeHeader /> */}
            {
                Errormessage ?
                    <div>
                        <div className="alert alert-danger">
                            {Errormessage}
                        </div>
                    </div>
                    : ""}
            {
                successmessage ?
                    <div>
                        <div className="alert alert-success">
                            {successmessage}
                        </div>
                    </div>
                    : ""}
            <div className="container">
                <div className="loginform">
                    <div className="userlogo">
                        <i className="fa fa-user-circle" style={{ fontSize: '60px' }} aria-hidden="true"></i>
                    </div>
                    <h3 className="heading">Login</h3>
                    <div className="main">
                        <div className="form-group">
                            <input type="email" name="email" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control" required />
                            {
                                emailerror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{emailerror}</small>
                                    </div>
                                    : ""}
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                            {
                                passworderror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{passworderror}</small>
                                    </div>
                                    : ""}
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={() => { AuthenticateTheUser() }}>Login</button>
                        <p className="already">
                            Create a new account: <Link className="anchor" to="/register" style={{ color: 'blue' }}>Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
