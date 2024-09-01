import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const BuyQR = () => {
  const [amount, setAmount] = useState(0);
  const qrData = "https://yourwebsite.com/payment"; // Replace with actual data you want to encode

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Amount in GHS:", amount);
    // Implement payment processing here
  };

  return (
    <>
      <Navbar />
      <section className="p-4 lg:p-8">
        <div
          onClick={() => navigate(-1)}
          className="text-black flex space-x-3 hover:cursor-pointer"
        >
          <ArrowBackIcon />
          <h1>Go back</h1>
        </div>
        <div className="max-w-lg mx-auto bg-wisteria-50 px-8 py-3 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-center">Buy Cedi</h2>
          <div>
            <h1 className="py-2">Enter amount to buy</h1>
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              variant="outlined"
              label="Amount in GHS"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <h2 className="text-xl font-bold mb-6">
            Scan QR Code or click on button to make payment
          </h2>
          <div className="flex justify-center mb-6">
            <QRCode value={amount} size={256} />
          </div>
          <div className="text-center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ backgroundColor: "#7e569a" }}
            >
              Proceed to Pay
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyQR;
