import React, { useState, useEffect } from 'react'
import './userregister.css'
import { Link } from 'react-router-dom';
import { PostUserDetails } from '../../../Services/AuthenticateService';
import HomeHeader from '../HomeHeader/HomeHeader';
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
    const [username, setusername] = useState("")
	const [email, setemail] = useState("")
	const [mobile, setmobile] = useState("")
	const [password, setpassword] = useState("")
	const [address, setaddress] = useState("")
	const [confirmpassword, setconfirmpassword] = useState("")
	const [usernameerror, setusernameerror] = useState("")
	const [emailerror, setemailerror] = useState("")
	const [mobileerror, setmobileerror] = useState("")
	const [passworderror, setpassworderror] = useState("")
	const [addresserror, setaddresserror] = useState("")
	const [confirmpassworderror, setconfirmpassworderror] = useState("")
	const [Errormessage, setErrormessage] = useState("")
	const [successmessage, setsuccessmessage] = useState("")

	var navigate = useNavigate();

	useEffect(() => {
		setusername("")
		setmobile("")
		setpassword("")
		setaddress("")
		setemail("")
		setconfirmpassword("")
	}, [])

	const SignupHandler = () => {
		const a1=ValidateMobile();
		const a2=validatePassword();
		const a3=ValidateAddress();
		const a4=ValidateUsername();
		const a5=ValidateEmail();
		if(a1===true && a2===true && a3===true && a4===true && a5==true)
		{
			if(password === confirmpassword)
			{
				setmobileerror("")
				setconfirmpassworderror("")
				setaddresserror("")
				setpassworderror("")
				AddUserToDB()
			}
			else
			{
				setconfirmpassworderror("does not match with your password.")
			}
		}
		else
		{
			setErrormessage("Please fill all the fields.")
		}
	}

	const AddUserToDB = () => {
		const obj = {
			"username": username,
			"email":email,
			"mobile": mobile,
			"address":address,
			"password": password
		}
		PostUserDetails(obj)
		.then((resp) => {
			if(resp.data.status=="Error")
			{
				setErrormessage("Please give valid credentials")
				setsuccessmessage("")
			}
			else
			{
				// localStorage.setItem("details",resp.data.details)
				// setsuccessmessage("Successfully Registered")
				navigate("/login");
			}
		})
	}

	const ValidateUsername = () => {
		if (username.length === 0) {
			setusernameerror("Username must not be empty")
			return false
		}
		return true;
	}

	const ValidateEmail = () => {
		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            setemailerror("")
            return true;
        }
        setemailerror("You have entered an invalid email address!")
        return false;
    }

	const ValidateMobile = () => {
		if (mobile.length !== 10) {
			setmobileerror("Mobie Number must be 10 digits only.")
			return false
		}
		return true;
	}

	const validatePassword = () => {
		let n = password.length, a1 = 0, a2 = 0, a3 = 0;
		if (n < 8) {
			setpassworderror("Password must contain 8 alphabets")
			return false;
		}
		var pwddata = password;
		for (let i = 0; i < n; i++) {
			if (pwddata[i] >= 'A' && pwddata[i] <= 'Z') {
				a1 = 1;
			}
			if (pwddata[i] >= 'a' && pwddata[i] <= 'z') {
				a2 = 1;
			}
			if (pwddata[i] >= '0' && pwddata[i] <= '1') {
				a3 = 1;
			}
		}
		if (a1 === 0 || a2 === 0 || a3 === 0) {
			setpassworderror("There must be atleast one Capital letter, one small letter and atleast one digits")
			return false;
		}
		return true;
	}

	const ValidateAddress = () => {
		if (address.length < 2) {
			setaddresserror("Address must be atleast conatins 2 alphabets")
			return false;
		}
		return true
	}

	return (
		<div>
			<HomeHeader />
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
				<div className="signupform">
					<div className="userlogo">
						<i className="fa fa-user-circle" style={{ fontSize: '60px' }} aria-hidden="true"></i>
					</div>
					<h3 className="heading">Register</h3>
					<div className="main">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="username" value={username} onChange={(e) => { setusername(e.target.value) }} required />
							{
                                usernameerror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{usernameerror}</small>
                                    </div>
                                    : ""}
						</div>
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
							<input type="tel" className="form-control" placeholder="Mobile Number" value={mobile} onChange={(e) => { setmobile(e.target.value) }} required />
							{
                                mobileerror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{mobileerror}</small>
                                    </div>
                                    : ""}
						</div>
						<div className="form-group">
							<textarea placeholder='Address ...' className="form-control" rows="3" value={address} onChange={(e) => { setaddress(e.target.value) }} required></textarea>
							{
                                addresserror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{addresserror}</small>
                                    </div>
                                    : ""}
						</div>
						<div className="form-group">
							<input type="password" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
							{
                                passworderror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{passworderror}</small>
                                    </div>
                                    : ""}
						</div>
						<div className="form-group">
							<input type="password" placeholder="Confirm password" value={confirmpassword} onChange={(e) => { setconfirmpassword(e.target.value) }} className="form-control" required />
							{
                                confirmpassworderror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{confirmpassworderror}</small>
                                    </div>
                                    : ""}
						</div>
						<button className="btn btn-primary" type="submit" onClick={() => {SignupHandler()}}>Register</button>
						<p className="already">
							Already have an account: <Link className="anchor" to="/login" style={{ color: 'blue' }}>login</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
