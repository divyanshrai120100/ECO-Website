import React from 'react'
import logo from '../assets/logo3.png';
function Navbar() {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#home">
                             <img src={logo} alt="Logo" style={{width:"40px"}} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#about">About</a>
                                </li>      
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#events">Events</a>
                                </li>                     
                                <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#gallery">Gallery</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
export default Navbar
