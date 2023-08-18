import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [error,seterror]=useState(false)



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

  const handleAddProduct = async() => {
    // console.log({
    //   productName,
    //   productPrice,
    //   category,
    //   company,
    // });
    if(!name || !price || !company || !category){
        seterror(true)
        return false
    }
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    
    const data=await fetch('http://localhost:5000/add',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          
              },
        })

        const result= await data.json()
        console.warn(result)

    alert('Product Saved')

    


    // Reset the form fields after adding the product
    setname('');
    setprice('');
    setCategory('');
    setCompany('');
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <div className="input-container">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleProductNameChange} placeholder='Enter Product Name'/>
      </div>
      {!error && !name &&<span className='formvalid'>Enter Valid name</span>}
      <div className="input-container">
        <label>Product Price:</label>
        <input type="text" value={price} onChange={handleProductPriceChange} placeholder='Enter Product Price'/>
      </div>
      {!error && !price &&<span className='formvalid'>Enter valid price</span>}
      <div className="input-container">
        <label>Category:</label>
        <input type="text" value={category} onChange={handleCategoryChange} placeholder='Enter Product Category'/>
      </div>
      {!error && !category &&<span className='formvalid'>Enter Valid category</span>}
      <div className="input-container">
        <label>Company:</label>
        <input type="text" value={company} onChange={handleCompanyChange} placeholder='Enter Product Company'/>
      </div>
   {!error && !company && <span className='formvalid'>Enter Valid Comppany</span>}
        <button className="add-product-button" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
