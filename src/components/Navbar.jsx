import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-wisteria-400 px-5 h-16 sticky top-0 z-50 py-5 lg:px-20 flex justify-between items-center shadow-md shadow-zinc-500">
        <div>
          <h1 className="logo text-white font-bold italic text-3xl">
            AnonyMart
          </h1>
        </div>
        <div className="flex text-white text-lg font-medium space-x-10">
          <h1
            onClick={() => navigate("/")}
            className={`${
              location.pathname === "/" ? "text-wisteria-950 font-bold" : ""
            } hover:text-wisteria-800 hover:cursor-pointer`}
          >
            Products
          </h1>
          <h1
            onClick={() => navigate("/sell-product")}
            className={`${
              location.pathname === "/sell-product"
                ? "text-wisteria-950 font-bold"
                : ""
            } hover:text-wisteria-800 hover:cursor-pointer`}
          >
            Sell
          </h1>
          <h1
            onClick={() => navigate("/buy-cedi")}
            className={`${
              location.pathname === "/buy-cedi"
                ? "text-wisteria-950 font-bold"
                : ""
            } hover:text-wisteria-800 hover:cursor-pointer`}
          >
            Buy Cedi
          </h1>
        </div>
      </section>
    </>
  );
};

export default Navbar;
