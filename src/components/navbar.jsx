import React from "react";
import {Link} from "react-router-dom";
import AddContact from "./AddContactForm";

export default function Navbar() {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-navbar'>
            <div className='container-fluid'>
                <Link to="/" className='navbar-brand'>Contact Apps</Link>
                <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-between' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link to="/" className='nav-link'>All Contact</Link></li>
                        <li className='nav-item'><Link to="/category/family" className='nav-link'>Family</Link></li>
                        <li className='nav-item'><Link to="/category/friend" className='nav-link'>Friend</Link></li>
                        <li className='nav-item'><Link to="/category/work" className='nav-link'>Work</Link></li>
                    </ul>
                </div>
                <div className="d-flex">
                    <AddContact/>
                </div>
            </div>
        </nav>
    )
}