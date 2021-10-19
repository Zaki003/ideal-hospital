import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../logo.png';
import './Header.css';

const Header = () => {
    const { user } = useAuth();
    return (
        <div className="header bg-gray-100 p-6 sticky top-0">
            <div id="logo-text" className="lg:mr-48 mr-8">
                <img width="50px" src={logo} alt="" />
                <h2 className="lg:text-4xl text-2xl pl-4 text-blue-800">Ideal Hospital</h2>
            </div>
            <nav className="links my-auto text-green-600 text-xl">
                <Link to="/home">Home</Link>
                <Link to="/Services">Services</Link>
                <Link to="/about">About us</Link>
                <Link to="/login">Login</Link>
            </nav>
            {user.email ? <span>Signed in as: {user.displayName}</span> : <span></span>}
        </div>
    );
};

export default Header;