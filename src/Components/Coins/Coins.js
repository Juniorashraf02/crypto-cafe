import React, { useEffect, useState } from 'react';
import CoinsCard from '../CoinsCard/CoinsCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setCoins(data)
        })
    },[])
    return (
        <div className='max-w-full'>
            <h2 className="text-4xl font-medium mt-10 text-blue-600">Available Crypto Currencies</h2>
            <h3 className='mt-3 text-gray-500'>Total currencies: {coins.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto">
                {
                    coins.map(coin => <CoinsCard
                        key={coin.id} coin={coin}
                    ></CoinsCard>)
                }
            </div>
        </div>
    );
};

export default Coins;