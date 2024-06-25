import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ product, quantity, onRemove, onQuantityChange }) => {
  return (
    <div className="row align-items-center border-bottom border-top mt-3 py-3">
      <div className="col-md-2">
        <img src={product.image} alt={product.title} className={`${styles.productImage} img-fluid`} />
      </div>
      <div className="col-md-3">
        <h5 className='fw-bold'>{product.title}</h5>
        <p className="text-muted">{product.subtitle}</p>
      </div>
      <div className="col-md-2 text-center">
        <span className='fs-5'>{product.price}</span>
      </div>
      <div className="col-md-2 text-center">
        <button className={`btn btn-outline-secondary btn-sm mx-3 ${styles.decrement}`} onClick={() => onQuantityChange(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button className={`btn btn-danger btn-sm mx-3 ${styles.increment}`} onClick={() => onQuantityChange(quantity + 1)}>+</button>
      </div>
      <div className="col-md-2 text-center">
        <span className='fs-5'>{"$"+ parseFloat(product.price.replace('$', '')) * quantity}</span>
      </div>
      <div className="col-md-1 text-center">
        <button className="btn btn-danger btn" onClick={onRemove}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
