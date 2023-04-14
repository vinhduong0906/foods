import styles from './CartItem.module.css';

import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
const CartItem = (props) => {
  //Display  item in cart modal
  const product = props.product;
  const ctxCart = useContext(CartContext);
  const addAmountHandler = () => {
    //Increase amount of item
    ctxCart.addItem(product.item, 1);
  };
  const removeAmountHandler = () => {
    //Decrease amount of item
    ctxCart.removeItem(product.item.id);
  };
  return (
    <div className={styles['cart-item']}>
      {/*Product description */}
      <div>
        <h2>{props.product.item.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>{product.item.price}</div>
          <div className={styles.amount}>{product.amount}</div>
        </div>
      </div>
      {/*Actions */}
      <div className={styles.action}>
        <button onClick={removeAmountHandler}>-</button>
        <button onClick={addAmountHandler}>+</button>
      </div>
    </div>
  );
};
export default CartItem;
