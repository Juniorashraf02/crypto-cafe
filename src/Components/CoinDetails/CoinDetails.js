import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCoinDetails from '../SingleCoinDetails/SingleCoinDetails';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoins] = useState({});
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`

        fetch(url).then((response) => response.json()).then(data => {
            // console.log(data)
            setCoins(data)
        })

    }, [id]);


    return (
        <div className="flex container mx-auto justify-around mt-5 items-center h-[60vh]">
            <div className="ml-2">
                <div className="text-justify">
                    <h1 className="text-3xl font-medium">General Info:</h1>
                    <p>Name: {coin.name}</p>
                    <p>Ranking: {coin.market_cap_rank}</p>
                    <p>Origin: {coin.country_origin ?"price_change_24h":"Not Available"}</p>
                </div>
                <div className="text-justify">
                    <h1 className="text-3xl font-medium">Scores:</h1>
                    <p>Community-Score: {coin.community_score}</p>
                    <p>Developer-Score: {coin.developer_score}</p>
                </div>
            </div>
            <div>
                <img src={coin.image?.large} alt="" srcset="" />
            </div>

        </div>
    );
};

export default CoinDetails;