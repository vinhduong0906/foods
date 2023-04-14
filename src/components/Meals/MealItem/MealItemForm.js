import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';
import { useContext, useState } from 'react';
//-----------------------------------------
const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const [valid, setValid] = useState(true);
  //--------*************-----------
  const formSubmitHandler = (event) => {
    //Process  submit button click
    event.preventDefault();
    //--------VAlidate amount input value
    if (event.target.amount.value < 1) {
      setValid(false);
      return;
    }
    setValid(true);
    //-------------------------------
    cartContext.addItem(props.item, event.target.amount.value);
    event.target.amount.value = 0;
  };
  //------------------*************--------------
  return (
    <form
      onSubmit={formSubmitHandler}
      className={`${styles.form} ${!valid ? styles.invalid : ''}`} ///**ADD CSS CLASS IF INVALID VALUE */}
    >
      <Input>
        <label>Amount</label>
        <input type='number' name='amount' min={0}></input>
      </Input>
      <button type='submit'>+ Add</button>
    </form>
  );
};
export default MealItemForm;
