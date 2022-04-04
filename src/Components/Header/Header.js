import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='font-semibold h-12 bg-gray-200 flex justify-center items-center'>
            <Link to='/home'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Header;