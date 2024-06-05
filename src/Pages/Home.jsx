import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Context/CoinContext";
import { Link } from "react-router-dom";
import Features from "../Components/Features";
import Pricing from "../Components/Pricing";
const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [display, setDisplay] = useState([]);
  const [inp, setInp] = useState("");

  const handleChange = (event) => {
    setInp(event.target.value);
    if (event.target.value === "") {
      setDisplay(allCoins);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let coinSuggest = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(inp.toLowerCase());
    });
    setDisplay(coinSuggest);
  };
  useEffect(() => {
    setDisplay(allCoins);
  }, [allCoins]);

  return (
    <>
      <div className=" text-white w-full">
        <div className="  flex justify-center items-center flex-col mb-8">
          <h1 className=" text-center text-[50px] md:text-[60px] lg:text-[60px] mt-16 leading-[75px] font-bold my-4 ">
            Largest <br /> Crypto Marketplace
          </h1>
          <p className=" text-center text-[#e3e3e3] mb-5 font-medium">
            Welcome to the world's largest cryptocurrency marketplace. <br />{" "}
            Sign up to explore more about cryptos.
          </p>
          <form
            onSubmit={handleSubmit}
            className=" sm:w-[50vw] md:w-[50vw] lg:w-[30vw] xl:w-[30vw] h-[5vh] rounded-lg bg-white py-2 sm:py-4 md:py-6 lg:py-7 flex justify-center items-center px-3 sm:px-5"
          >
            <input
              list="coinList"
              onChange={handleChange}
              className="outline-none text-black w-full h-full rounded-lg p-2 sm:p-3 md:p-4 lg:p-5"
              type="text"
              placeholder="Search crypto.."
              required
            />
            <datalist id="coinList">
              {allCoins.map((item, index) => (
                <option key={index} value={item.name} />
              ))}
            </datalist>
            <button className="flex justify-center items-center h-full ml-2 sm:ml-3 md:ml-4 lg:ml-5 bg-[#7927ff] text-white font-normal px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-2 md:py-3 lg:py-4 rounded-lg">
              Search
            </button>
          </form>
        </div>
        <div className="crypto-table bg-coin-gradient max-w-full sm:max-w-3xl m-auto rounded">
          <div className="grid grid-cols-[1fr_3fr_2fr_2fr] sm:grid-cols-[1fr_3fr_2fr_2fr_3fr] items-center px-2 sm:px-4 py-2 sm:py-3 rounded text-xs sm:text-base">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className="text-center">24H Change</p>
            <p className="text-right hidden sm:block">Market Cap</p>
          </div>
          {display.slice(0, 10).map((item, index) => (
            <Link
              to={`/coin/${item.id}`}
              className="grid grid-cols-[1fr_3fr_2fr_2fr] sm:grid-cols-[1fr_3fr_2fr_2fr_3fr] items-center px-2 sm:px-4 py-2 sm:py-3 rounded text-xs sm:text-base"
              key={index}
            >
              <p>{item.market_cap_rank}</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <img className="w-6 sm:w-10" src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>
                {currency.symbol}
                {item.current_price.toLocaleString()}
              </p>
              <p
                className={`text-center ${
                  item.price_change_percentage_24h > 0
                    ? "text-[#60f860]"
                    : "text-[#e94242]"
                }`}
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className="text-right hidden sm:block">
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Features />
      <Pricing />
    </>
  );
};

export default Home;
