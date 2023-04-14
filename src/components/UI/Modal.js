import styles from './Modal.module.css';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import Card from './Card';
import CartContext from '../../store/cart-context';
import Cart from '../Cart/Cart';
const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};
const ModalContent = (props) => {
  return (
    <div className={styles.modal}>
      <Cart closeModal={props.closeModal} />
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {createPortal(
        <ModalContent closeModal={props.onClose} />,
        document.getElementById('modal')
      )}
    </React.Fragment>
  );
};
export default Modal;
