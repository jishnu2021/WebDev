import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []); // Empty dependency array to run only once

  const getProductDetails = async () => {
    try {
      let result = await fetch(`http://localhost:5000/product/${params._id}`,{
        headers:{
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        
      });
      const res = await result.json();
      console.warn(res);
      setname(res.name);
      setprice(res.price);
      setCompany(res.company);
      setCategory(res.category);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleProductNameChange = (e) => {
    setname(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setprice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleUpdateProduct = async () => {
    try {
      console.log({
        name,
        price,
        category,
        company,
      });

      const updateresult = await fetch(`http://localhost:5000/product/${params._id}`, {
        method: 'put',
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          
          
        },
      });
      let upres = await updateresult.json();
      console.warn(upres);
      navigate('/');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Update Product</h2>
      <div className="input-container">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleProductNameChange} placeholder="Update Product Name" />
      </div>

      <div className="input-container">
        <label>Product Price:</label>
        <input type="text" value={price} onChange={handleProductPriceChange} placeholder="Update Product Price" />
      </div>

      <div className="input-container">
        <label>Category:</label>
        <input type="text" value={category} onChange={handleCategoryChange} placeholder="Update Product Category" />
      </div>

      <div className="input-container">
        <label>Company:</label>
        <input type="text" value={company} onChange={handleCompanyChange} placeholder="Update Product Company" />
      </div>

      <button className="add-product-button" onClick={handleUpdateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
