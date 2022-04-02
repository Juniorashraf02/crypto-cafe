import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="items-center container mx-auto my-36">
            <h1 className="text-4xl font-medium mb-4">Welcome to CRYPTO CAFE....!!!</h1>
            <Link to={'/coins'}>
                <button className="rounded-full border-0 bg-sky-600 text-white p-2 hover:text-red-100 hover:bg-lime-600 ">Explore coins</button></Link>
        </div>
    );
};

export default Home;