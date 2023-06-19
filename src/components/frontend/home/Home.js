import React, { useState, useEffect } from 'react';
import AllProduct from './AllProduct';
import Navbar from '../../../layouts/frontend/Navbar';

function ParentComponent() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Navbar cartItemCount={cartItems.length} />
      <AllProduct addToCart={addToCart} />
    </>
  );
}

export default ParentComponent;
