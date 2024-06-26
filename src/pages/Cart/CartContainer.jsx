import React, { useState } from 'react';
import IntroCart from '../../components/CartComponents/IntroCart/IntroCart';
import Cart from './Cart';

const CartContainer = () => {
  const [items, setItems] = useState([
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
  ]);

  const handleClearCart = () => {
    setItems([]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setItems(items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    }
  };

  return (
      <>
    <IntroCart/>
    <Cart
      items={items}
      onClearCart={handleClearCart}
      onRemoveItem={handleRemoveItem}
      onQuantityChange={handleQuantityChange}
    />
    </>
  );
};

export default CartContainer;
