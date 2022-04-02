import React from 'react';
import { Link } from 'react-router-dom';

const bdAddress = () => {
    return (
        <div>
            <Link to={"/contact/bd"}>
                <div>
                    <h1 className="bg-orange-500 p-5 rounded text-white">Ghorashal Bazar, Palash,Narsingdi, <br /> 1613 Dhaka, Bangladesh <br />
                        <p>Coordinate: 23.9390359478, 90.6184530258</p>
                    </h1>
                </div>
            </Link>
        </div>
    );
};

export default bdAddress;