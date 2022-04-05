import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='font-semibold h-12 bg-gray-200 flex justify-center items-center'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/review'>Review</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;