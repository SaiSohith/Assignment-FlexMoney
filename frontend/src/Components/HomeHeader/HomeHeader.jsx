import React from 'react'
import { Link } from 'react-router-dom';
import './homeheader.css';

export default function HomeHeader() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand logo" to="/"><span className="logo-font" style={{marginLeft: '20px'}}> Upraise</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars fa-lg"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-right" style={{marginLeft: '950px'}} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Aboutus</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Contactus</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}