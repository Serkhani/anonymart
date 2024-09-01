import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import watch from '../assets/watch.jpg';
import Navbar from '../components/Navbar';

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  CONST[product, setProduct] = useState({})

  const navigate = useNavigate();

  // const product = {
  //   image: watch, // Replace with actual image path
  //   name: 'Sample Product',
  //   description: 'This is a sample product description. It provides details about the product.',
  //   price: '$99.99',
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https:example.com/id', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [])

  const handleBuy = () => {
    setLoading(true);
    // Simulate a buy action
    setTimeout(() => {
      setLoading(false);
      alert('Purchase successful!');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <section className="p-4 lg:p-8">
        <div onClick={() => navigate(-1)} className='text-black flex space-x-3 hover:cursor-pointer'>
          <ArrowBackIcon />
          <h1>Go back</h1>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="mb-6 w-full h-auto object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <span className="text-xl font-semibold text-wisteria-600 mb-6">
            {product.price}
          </span>
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={handleBuy}
            startIcon={loading ? <CircularProgress size={20} sx={{ color: "#7e569a" }} /> : null}
            sx={{ backgroundColor: "#7e569a" }}
          >
            {loading ? 'Processing...' : 'Buy Now'}
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
