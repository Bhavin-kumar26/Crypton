import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className=" w-full bg-custom-gradient min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
