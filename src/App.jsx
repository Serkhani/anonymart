import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProducts";
import BuyQR from "./pages/BuyQR";
import ProductDetails from "./pages/ProductDetails";
import SellProduct from "./pages/SellProduct";

const App = () => {
  return (
    <>
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
