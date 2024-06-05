import React, { useContext, useState } from "react";
import arrow from "../assets/arrow-right-up-line.png";
import { CoinContext } from "../Context/CoinContext";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setCurrency } = useContext(CoinContext);

  const handlerChange = (event) => {
    if (event.target.value) {
      if (event.target.value === "usd") {
        setCurrency({ name: "usd", symbol: "$" });
      } else if (event.target.value === "inr") {
        setCurrency({ name: "inr", symbol: "₹" });
      } else if (event.target.value === "eur") {
        setCurrency({ name: "eur", symbol: "€" });
      }
    }
  };

  const handelMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" text-white border-b-2 border-[#565656] flex justify-between items-center px-10">
      <div className=" w-full h-20 flex justify-between items-center">
        <div className="">
          <Link to={"/"} className=" text-3xl font-bold tracking-widest">
            CRYPTON
          </Link>
        </div>

        <ul className=" hidden gap-10 cursor-pointer font-medium text-[15px] tracking-wide lg:flex md:flex sm:hidden">
          <Link to={"/"}>Home</Link>
          <li>
            <a href="">Features</a>
          </li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="hidden  md:flex lg:flex justify-center items-center gap-6">
          <select
            onChange={handlerChange}
            className=" text-white bg-transparent p-1 border-2 rounded-md px-2"
          >
            <option className=" bg-[#222262] p-1 text-white" value="usd">
              USD
            </option>
            <option className=" bg-[#222262] p-1 text-white" value="inr">
              INR
            </option>
            <option className=" bg-[#222262] p-1 text-white" value="eur">
              EUR
            </option>
          </select>
          <button className=" hidden bg-white text-black px-4 py-2 rounded-full justify-center items-center gap-2 text-pretty text-[14px] font-medium md:flex lg:flex">
            Sign Up <img className=" w-[20px]" src={arrow} alt="" />{" "}
          </button>
        </div>
      </div>
      <div className=" lg:hidden md:hidden flex-col justify-end z-50">
        <button onClick={handelMenu} className=" text-[30px] font-bold">
          {showMenu ? <IoCloseSharp /> : <MdOutlineMenu />}
        </button>
      </div>
      {showMenu && (
        <div className=" fixed top-0 w-full bg-custom-gradient h-[100%] flex justify-center items-center lg:hidden md:hidden ">
          <ul className=" text-2xl">
            <Link to={"/"}>Home</Link>
            <li className="my-10">
              <a href="">Features</a>
            </li>
            <li>Pricing</li>
            <li  className=" mt-10">Blog</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
