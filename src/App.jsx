import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProducts";
import BuyQR from "./pages/BuyQR";
import ProductDetails from "./pages/ProductDetails";
import SellProduct from "./pages/SellProduct";
import EthereumContextProvider from "./services/ethereum/context";

const App = () => {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/sell-product" element={<SellProduct />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/buy-cedi" element={<BuyQR />} />
      </Routes>
      </>
  );
};

export default App;
