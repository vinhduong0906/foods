import styles from './HeaderCartButton.module.css';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import CartContext from '../../store/cart-context';
import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
const HeaderCartButton = () => {
  //Show Cart button
  const [showCart, setShowCart] = useState(false);
  const ctxCart = useContext(CartContext);

  const showCartHandler = (event) => {
    //Show cart modal function
    setShowCart(true);
  };
  const hideCartHandler = () => {
    //Hide cart modal function
    setShowCart(false);
  };
  return (
    <React.Fragment>
      {showCart && <Modal onClose={hideCartHandler} />}
      {/**Show the Cart Modal when showCart's value is set to 'true'
       */}
      <button onClick={showCartHandler} className={styles.button}>
        <ShoppingCartIcon className={styles.icon} />
        {/*Cart Icon */}
        Your Cart
        <div className={styles.badge}>{ctxCart.items.length}</div>
        {/**Amount of item */}
      </button>
    </React.Fragment>
  );
};
export default HeaderCartButton;
