import CartItem from '../../components/CartComponents/CartItem/CartItem';
import productsData from '../../components/ShopComponents/productsData/productsData';
import styles from "./Cart.module.css"
const Cart = ({ items, onClearCart, onRemoveItem, onQuantityChange }) => {
  const total = items.reduce((sum, item) => sum + parseFloat(productsData.find(product => product.id === item.id).price.replace('$', '')) * item.quantity, 0);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
      </div>
      <div className="row">
        <div className="col">
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-2 text-center">
                <h3 className='fw-bold'>Product</h3>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-2 text-center">
                <h3 className='fw-bold'>Price</h3>
              </div>
              <div className="col-md-2 text-center">
                <h3 className='fw-bold'>Quantity</h3>
              </div>
              <div className="col-md-2 text-center">
                <h3 className='fw-bold'>Total</h3>
              </div>
            </div>
          </div>
          {items.map(item => {
            const product = productsData.find(product => product.id === item.id);
            return (
              <CartItem
                key={item.id}
                product={product}
                quantity={item.quantity}
                onRemove={() => onRemoveItem(item.id)}
                onQuantityChange={newQuantity => onQuantityChange(item.id, newQuantity)}
              />
            );
          })}
        </div>
      </div>
      <div className="my-4 d-flex justify-content-center justify-content-md-end">
        <button className="btn btn-danger mt-3" onClick={onClearCart}>
          Clear Shopping Cart
        </button>
      </div>
      <div className={`row my-5  ${styles.cartContainer}`}>
        <div className="col-md-6">
          <h5 className='text-center mb-4 fw-bold'>SPECIAL INSTRUCTIONS FOR SELLER</h5>
          <div className={styles.instructions}>
            <textarea className="form-control" rows="9"></textarea>
          </div>
        </div>
        <div className={`col-md-6`}>
          <h5 className="text-center mb-5 fw-bold">Cart Total</h5>
          <div className={styles.cartTotalDetails}>
            <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
              <span className='mb-4'>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
              <span className='mb-4'>Shipping:</span>
              <span className='mb-4'>Shipping & taxes calculated at checkout</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold mt-3">Total:</span>
              <span className="fw-bold mt-3">${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="btn btn-danger w-100 mt-4">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
