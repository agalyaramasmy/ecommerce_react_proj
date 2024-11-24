import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect, useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signups from './project/signup';
import Signins from './project/signin';
import NavbarComponent from './project/navbar';
import { LatestItems } from './project/latest';
import { MenItems } from './project/menproducts';
import { WomenItems } from './project/womenproducts';
import { KidItems } from './project/kidsproduct';
import Cart from './project/add_cart';


function App() {
  const[isAuthenticated,setIsAuthenticated]=useState(false)
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    const storedCart = localStorage.getItem("cartval");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart)); // Parse the stored cart
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        localStorage.removeItem("cartval"); // Clear invalid entry
        setCart([]); // Reset to empty cart
      }
    }
  }, []);

  const handleSignInSuccess =(nameuser) => {
    console.log(nameuser);
    setIsAuthenticated(true);
    localStorage.setItem("username",nameuser);
    console.log("yes");
     }

    // Function to handle adding items to the cart
    const handleAddToCart = (item) => {
      setCart((prevCart) => {
        const newCart = [...prevCart, item];
        localStorage.setItem("cartval", JSON.stringify(newCart)); // Store in local storage
        alert(`${item.name} added to the cart!`);
        return newCart; // Return the new cart to update the state
      });
    };

  
  return (
    <>
    <BrowserRouter>
<NavbarComponent isAuthenticated={isAuthenticated} search={search} setSearch={setSearch} />

<Routes>
  <Route path="signup" element={<Signups/>} />
  <Route path="signins" element={<Signins handleSignInSuccess={handleSignInSuccess} />} />

  <Route path="/men" element={<MenItems handleAddToCart={handleAddToCart}/>} />
  <Route path="/women" element={<WomenItems handleAddToCart={handleAddToCart} />} />
  <Route path="/kids"  element={<KidItems   handleAddToCart={handleAddToCart}/>} />
  <Route path="/cart"  element={<Cart cartItems={cart}/>} />
  <Route path="/latest" element={<LatestItems search={search} setSearch={setSearch}  handleAddToCart={handleAddToCart} />} />
</Routes>
</BrowserRouter>
    </>
  )
};

export default App;
