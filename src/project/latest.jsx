import React, { useState, useEffect} from 'react';
import './latest.css';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import productData from './productdetails'; 
import NavbarComponent from './navbar';

export const LatestItems=({ handleAddToCart })=>{
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState(''); 
 
  useEffect(() => {
    // const offerProducts = productData.filter(item => item.category === 'latest');
    // console.log(offerProducts)
    setProductList(productData);
  }, []);
  const filteredProducts = productList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
);

  return(
    <div>
      <div className="head">
      
      <NavbarComponent isAuthenticated={true} search={search} setSearch={setSearch} /> 
      
      </div>
    <div className="product">
      { filteredProducts .map((item,index) => (
        <div className='cards' key={index}>
          <img src={item.image} alt={item.name} />
          <p className='Pname'>{item.name}</p>
          <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
          <div className='Pr_price'>
            <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
            <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
          </div>
          <div className="cart">
            <button className='cart_btn'  onClick={() => handleAddToCart(item)}>Add to cart</button>
           {console.log(handleAddToCart)}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}