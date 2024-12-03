import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NavbarComponent = ({ isAuthenticated ,search, setSearch }) => {
    const [menu, SetMenu] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const username = localStorage.getItem('username');

    return (
        <>
            {isAuthenticated ? (
                <div className='nav_bar'>
                    <div className="nav_container">
                        <div className="brand">
                            <FaBars 
                                className="hamburger" 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            />
                            <p className="name">SHOPPER</p>
                        </div>
                        <ul className={`nav_menu ${isMenuOpen ? 'show' : ''}`}>
                            <li onClick={() => { SetMenu("shop") }}>
                                <Link style={{ textDecoration: "none", color: '#ddd' }} to={"/latest"}>Shop</Link>
                              
                            </li>
                            <li onClick={() => { SetMenu("mens") }}>
                                <Link style={{ textDecoration: "none", color: '#ddd' }} to={"/men"}>Mens</Link>
                             
                            </li>
                            <li onClick={() => { SetMenu("womens") }}>
                                <Link style={{ textDecoration: "none", color: '#ddd' }} to={"/women"}>Womens</Link>
                              
                            </li>
                            <li onClick={() => { SetMenu("kids") }}>
                                <Link style={{ textDecoration: "none", color: '#ddd' }} to={"/kids"}>Kids</Link>
                               
                            </li>
                        </ul>
                        <div className='right_nav'>
                        <InputGroup className="search-bar">
            <Form.Control
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
                            <div className="user">
                                <span><FaUser /></span>
                                <p>{username}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default NavbarComponent;
