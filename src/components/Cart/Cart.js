import styles from './Cart.module.css';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import useHttp from '../../hooks/use-http';
import * as cors from 'cors';

const corsHandler = cors({ origin: true });
const Cart = (props) => {
  const getdata = (data) => {
    console.log(data);
  };
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const { sendRequest } = useHttp();

  const orderSubmitHandler = () => {
    DUMMY_MEALS.map((meal) => {
      const config = {
        url: 'https://meals-1b424-default-rtdb.firebaseio.com/dummy_meals',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: meal,
      };
      sendRequest(config, getdata);
    });
  };
  //Display items in Cart when user click the Cart
  const ctxCart = useContext(CartContext);
  return (
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
      <div className={styles.actions}>
        <button className={styles.button__alt} onClick={props.onClose}>
          {/*Close button */}
          Close
        </button>
        <button onClick={orderSubmitHandler} className={styles.button}>
          Order
        </button>
        {/*Order button */}
      </div>
    </div>
  );
};
export default Cart;
