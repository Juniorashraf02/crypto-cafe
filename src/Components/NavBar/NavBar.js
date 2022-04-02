import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    return (
        <div className='bg-red-200 p-3'>
            <div className='flex justify-between container mx-auto items-center'>
                <div className='hidden md:block'>
                    <h1 className='text-3xl font-medium'><Link to='/'>Crypto Cafe</Link></h1>
                </div>
                <div className='gap-4 flex font-medium ml-16'>
                    <CustomLink to='/' className='hover:text-red-400'>Home</CustomLink>
                    <CustomLink to='/coins' className='hover:text-red-400'>Coins</CustomLink>
                    <CustomLink to='/contact' className='hover:text-red-400'>Contact</CustomLink>
                    <CustomLink to='/aboutUs' className='hover:text-red-400'>About Us</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;