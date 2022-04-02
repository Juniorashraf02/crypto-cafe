import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>Tell us about your problem.</h1>
            <textarea type="text" className="w-6/12 h-20 mt-2 border hover:bg-slate-100 p-5" />
            <br />
            <button type="submit" className="rounded border-0 bg-blue-600 px-5 py-1 text-white font-medium">Submit</button>
            <div className=" gap-5 justify-center mt-0">
                <div className='flex container mx-auto justify-center'>
                    <div className='mx-5'>
                        <Link to={'/contact/bd'}>
                            <button className="rounded border-0 mt-5 bg-blue-600 px-5 py-1 text-white font-medium">Bd Address</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/contact/US'>
                            <button className="rounded border-0 mt-5 bg-blue-600 px-5 py-1 text-white font-medium">US Address</button>
                        </Link>
                    </div>
                </div>
                <div className="mt-5 justify-self-center mx-auto p-5 rounded">
                    <Outlet></Outlet>
                </div>
           </div>
        </div>
    );
};

export default Contact;