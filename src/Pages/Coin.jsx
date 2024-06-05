import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";
import LineChart from "../Components/Linechart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [data, setData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);
  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mcZsLW1BG6TwPQJ4WGA36TAP	",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  const getHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mcZsLW1BG6TwPQJ4WGA36TAP	",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCoinData();
    getHistoricalData();
  }, [currency]);

  // console.log(data);
  if (data) {
    return (
      <div className="w-full flex flex-col justify-center items-center">
      <div className="text-white mt-10 flex flex-col items-center">
        <img className="max-w-[80px] sm:max-w-[100px]" src={data.image.large} alt={data.id} />
        <p className="text-center text-[30px] sm:text-[40px]">
          <b className="text-center">
            {data.name} ({data.symbol.toUpperCase()})
          </b>
        </p>
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[600px] h-[200px] sm:h-[250px] mt-4">
        <LineChart historicalData={historicalData} />
      </div>
      <div className="text-white w-full max-w-[300px] sm:max-w-[500px] h-auto p-4 my-10 flex flex-col justify-between gap-4">
        <ul className="flex justify-between border-b-2 pb-2 border-[#5f5d5f]">
          <li>Crypto Market Rank</li>
          <li>{data.market_cap_rank}</li>
        </ul>
        <ul className="flex justify-between border-b-2 border-[#5f5d5f]">
          <li>Current Price</li>
          <li>
            {currency.symbol} {data.market_data.current_price[currency.name]}
          </li>
        </ul>
        <ul className="flex justify-between border-b-2 border-[#5f5d5f]">
          <li>Market Cap</li>
          <li>
            {currency.symbol}
            {data.market_data.market_cap[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul className="flex justify-between border-b-2 border-[#5f5d5f]">
          <li>24 Hour Low</li>
          <li>
            {currency.symbol}
            {data.market_data.low_24h[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul className="flex justify-between border-b-2 border-[#5f5d5f]">
          <li>24 Hour High</li>
          <li>
            {currency.symbol}
            {data.market_data.high_24h[currency.name].toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
    
    );
  } else {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
    );
  }
};

export default Coin;
