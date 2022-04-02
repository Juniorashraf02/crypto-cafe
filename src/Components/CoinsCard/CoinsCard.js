import React from 'react';
import { Link } from 'react-router-dom';

const CoinsCard = ({ coin }) => {
    const { image, id, name } = coin;
    // console.log(coin);
    return (

        <div>
            <Link to={`/coin-details/${id}`}>
            <div className='flex items-center gap-5 border-0 m-5 rounded-xl bg-blue-100 drop-shadow-lg justify-around p-5'>

                <div className="w-14 flex-shrink-0">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className="font-medium">Name: {name}</h1>
                    <h1 className="text-gray-400">ID: {id}</h1>
                </div>
                </div>
            </Link>
        </div>

    );
};

export default CoinsCard;