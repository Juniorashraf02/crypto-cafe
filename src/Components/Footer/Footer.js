import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer">
            <footer className='bg-gray-100 pt-5 mt-10'>
            
                <div className='flex gap-10 justify-center my-1'>
                    <a target='_blank' href="https://www.facebook.com/juniorashraf02" rel="noreferrer"><FaFacebookF></FaFacebookF></a>
                    <a target='_blank' href="https://www.linkedin.com/in/istiakashraf/" rel="noreferrer"><FaLinkedinIn /></a>
                    <a target='_blank' href="https://www.facebook.com/juniorashraf02" rel="noreferrer"><BsTwitter /></a>
                    
                </div>

                <h1 className="text-sky-600 mt-5">All rights reserved by &#169; Crypto Cafe | 2022-2030</h1>
            </footer>
        </div>
    );
};

export default Footer;