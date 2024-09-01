import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SellProduct = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    token: "",
    image: null,
    price: "",
    description: "",
    name: "",
  });
  const [formMode, setFormMode] = useState("token"); // "token" or "create"

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate token submission
    setTimeout(() => {
      setLoading(false);
      console.log("Token submitted:", formData.token);
    }, 2000);
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare form data for submission
    const submissionData = new FormData();
    submissionData.append("image", formData.image);
    submissionData.append("price", formData.price);
    submissionData.append("description", formData.description);
    submissionData.append("name", formData.name);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      console.log(
        "Product submitted:",
        Object.fromEntries(submissionData.entries())
      );
    }, 2000);
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
          <h2 className="text-2xl font-bold mb-6 text-center">
            {formMode === "token" ? "Sell Product Token" : "Sell Product"}
          </h2>
          <form
            onSubmit={
              formMode === "token" ? handleTokenSubmit : handleCreateSubmit
            }
          >
            {formMode === "token" && (
              <div>
                <h1 className="italic py-2">Enter token if you have. Fee is GHS 2.00</h1>
                <div className="mb-4">
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Token"
                    name="token"
                    value={formData.token}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            {formMode === "create" && (
              <>
                <div className="mb-4">
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Description"
                    name="description"
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded p-3 cursor-pointer bg-gray-50 focus:outline-none"
                  />
                </div>
              </>
            )}
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={20} sx={{ color: "#7e569a" }} />
                  ) : null
                }
                sx={{ backgroundColor: "#7e569a" }}
              >
                {loading
                  ? formMode === "token"
                    ? "Submitting Token..."
                    : "Submitting..."
                  : formMode === "token"
                  ? "Submit Token"
                  : "Submit"}
              </Button>
            </div>
          </form>
          <div className="text-center mt-4">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() =>
                setFormMode(formMode === "token" ? "create" : "token")
              }
            >
              {formMode === "token"
                ? "Switch to Create Product"
                : "Switch to Sell Token"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellProduct;
