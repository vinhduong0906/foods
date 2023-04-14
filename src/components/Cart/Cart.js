import styles from './Cart.module.css';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import CartForm from './CartForm';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
  //Display items in Cart when user click the Cart button
  const ctxCart = useContext(CartContext);
  const [orderComplete, setOrderComplete] = useState(false);
  const orderCompleteHandler = () => {
    setOrderComplete(true);
  };
  return (
    <React.Fragment>
      {/*---------------Show this content when order completed----------------*/}
      {orderComplete && (
        <div className='action'>
          <h2>Your order has been completed!</h2>
          <button onClick={props.closeModal}>OK</button>
        </div>
      )}
      {/*---------------Show this content when click the Cart Button in header---------------*/}
      {!orderComplete && (
        <div className={styles['cart-items']}>
          {ctxCart.items.length > 0 ? (
            ctxCart.items.map((item) => {
              //List items
              return <CartItem product={item} />;
            })
          ) : (
            <div className={styles.noitem}>You have no item in Cart</div> //Display when Cart have no Item
          )}
          {/* Display total amount and the actions button*/}
          <div className={styles.total}>
            <h2>Total Amount</h2>
            <div>{ctxCart.totalAmount}</div>
          </div>
          {/*---------------import Cart Form content ----------------*/}
          <CartForm
            onClose={props.closeModal}
            onOrderComplete={orderCompleteHandler}
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default Cart;
