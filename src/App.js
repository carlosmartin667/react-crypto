import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import axios from "axios";
import cors from 'cors'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  
  const getData = async () => {
    try {
      
      const res = await axios.get(
        "http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

    console.log('dsa');
  const getDataDos = async () => {
    var x = cors();

    const router = "https://api.coingecko.com/api/v3/coins/list?include_platform=true";
    const res = await fetch(router);
    console.log(res);
    // const data = await res.json();
    // console.log(data);
  };
   getDataDos();
  useEffect(() => {
   
  }, []);
  return (
    <>
      <Header />
      <h1>hola</h1>
      <Footer />
    </>
  );
}

export default App;
