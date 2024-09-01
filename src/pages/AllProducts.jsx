import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import watch from "../assets/watch.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Watch", price: "99", image: watch },
    { id: 1, name: "Watch", price: "99", image: watch },
    { id: 1, name: "Watch", price: "99", image: watch },
    { id: 1, name: "Watch", price: "99", image: watch },
    // Add more products here
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="p-10">
        <div className="mb-6">
          <TextField
            fullWidth
            variant="outlined"
            label="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={"/product-details"}>
              <Card
                key={product.id}
                className="shadow-lg"
                sx={{ maxWidth: 300 }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <h1 className="font-bold text-lg">{product.name}</h1>
                  <h1 className="text-right font-medium">
                    {" "}
                    GHS {product.price}
                  </h1>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
