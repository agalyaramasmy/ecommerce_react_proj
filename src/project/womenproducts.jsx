import React, { useState, useEffect} from 'react';
import './latest.css';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import productData from './productdetails'; 


export const WomenItems=({ handleAddToCart })=>{
  const [productList1, setProductList1] = useState([]);
 
  useEffect(() => {
    const womenProducts = productData.filter(item => item.category === 'womens');
    console.log(womenProducts)
    setProductList1(womenProducts);
  }, []);

  return(
    <div>
      <div className="head">
      
      <p>Womens Collections...!  </p>
      
      </div>
    <div className="product">
      {productList1.map((item,index) => (
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
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}