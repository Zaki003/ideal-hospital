import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    // console.log(user);
    return (
        <div className="header bg-gray-100 p-6 sticky top-0">
            <div id="logo-text" className="lg:mr-48 mr-8">
                <img width="50px" src={logo} alt="" />
                <h2 className="lg:text-4xl text-2xl pl-4 text-blue-800">Ideal Hospital</h2>
            </div>
            <nav className="links my-auto text-green-600 text-xl">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About us</Link>
                {
                    (user.displayName || user.email) ?
                        <button onClick={logout} className="bg-pink-500 text-white px-4 py-2 rounded-lg">Logout</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
            {(user.displayName || user.email) ? <span className="text-black my-auto mx-auto text-xl">Signed in as: {user.displayName}</span> : <span className="text-black my-auto mx-auto text-xl">Not Signed In</span>}
        </div>
    );
};

export default Header;