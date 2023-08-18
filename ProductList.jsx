

import React, { useEffect, useState } from 'react';
import './AddProductList.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    try {
      let result = await fetch('http://localhost:5000/product',{
        headers:{
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      if (!result.ok) {
        throw new Error('Failed to fetch data from the server');
      }
      const res = await result.json();
      if (Array.isArray(res)) {
        setProductList(res);
      } else {
        throw new Error('Invalid data format received from the server');
      }
    } catch (error) {
      console.error('Error fetching product list:', error.message);
    }
  };

  console.warn("products", productList);

  const deleteProduct = async (id) => {
    try {
      let delres = await fetch(`http://localhost:5000/product/${id}`, {
        method: "Delete",
        headers:{
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      if (!delres.ok) {
        throw new Error('Failed to delete the product');
      }
      let result = await delres.json();
      if (result) {
        getProductList();
      }
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const searchhandle=async (event)=>{
    let key=event.target.value;
    if(key){
      let result=await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      }
      )
      result=await result.json()
      if(result){
        setProductList(result)
      }
      }
      else{
        getProductList()
      }
  }

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <input type="search" className='search-box' placeholder='Search Products' 
      onChange={searchhandle}/>
      <table className="product-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {
          productList.length>0  ? productList.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
              <td>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                <Link to={"/update/"+item._id}>Update</Link>
              </td>
            </tr>
          ))
          :<h1>No Results Found</h1>
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
