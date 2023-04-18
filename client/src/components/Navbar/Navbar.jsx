import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar';

export const Navbar = () => {

    var User = null
    return (
        <nav>
            <div className="navbar">
                <Link to='/' className="nav-item nav-btn nav-logo">
                    <div className='logo'>Samvaad</div>
                </Link>
                <Link to='/' className="nav-item nav-btn">
                    About
                </Link>
                <Link to='/' className="nav-item nav-btn">
                    Products
                </Link>
                <Link to='/' className="nav-item nav-btn">
                    For Teams
                </Link>
                <form action="">
                    <input type="text" placeholder='Search..' />
                </form>
                {User === null ?
                    <Link to='/Auth' className="nav-item nav-links">Log in</Link> :
                    <>
                        <Avatar backgroundColor='#009dff' px='10px' py='7px' color='white' borderRadius='2px'><Link to='/User' >A</Link></Avatar>
                        <button className='nav-link nav-item'>Log out</button>
                    </>
                }
            </div>
        </nav>
    )
}