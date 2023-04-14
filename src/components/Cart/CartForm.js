import styles from './CartForm.module.css';
import useInput from '../../hooks/use-input';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const inputValid = (value) => value.trim() != ''; //set the valid of input value
const postCodeValid = (value) => value.trim().length >= 5; //set the valid of input post code value

const CartForm = (props) => {
  const ctxCart = useContext(CartContext);
  {
    /*---------------use useInput hook to validate data input----------------*/
  }
  const {
    inputValue: inputNameValue,
    inputValid: inputNameValid,
    hasError: inputNameHasError,
    inputBlurHandler: inputNameBlurHandler,
    inputChangeHandler: inputNameChangeHandler,
  } = useInput(inputValid);
  const {
    inputValue: inputStreetValue,
    inputValid: inputStreetValid,
    hasError: inputStreetHasError,
    inputBlurHandler: inputStreetBlurHandler,
    inputChangeHandler: inputStreetChangeHandler,
  } = useInput(inputValid);
  const {
    inputValue: inputCityValue,
    inputValid: inputCityValid,
    hasError: inputCityHasError,
    inputBlurHandler: inputCityBlurHandler,
    inputChangeHandler: inputCityChangeHandler,
  } = useInput(inputValid);
  const {
    inputValue: inputPostCodeValue,
    inputValid: inputPostCodeValid,
    hasError: inputPostCodeHasError,
    inputBlurHandler: inputPostCodeBlurHandler,
    inputChangeHandler: inputPostCodeChangeHandler,
  } = useInput(postCodeValid);
  let validForm = false; //all input data in form is valid or invalid

  if (
    inputNameValid &&
    inputStreetValid &&
    inputCityValid &&
    inputPostCodeValid &&
    ctxCart.totalAmount > 0
  )
    validForm = true;
  {
    /*---------------submit form click handler----------------*/
  }
  const orderSubmitHandler = (event) => {
    event.preventDefault();
    ctxCart.items = [];
    ctxCart.totalAmount = 0;
    props.onOrderComplete();
  };
  {
    /*---------------Return jsx code----------------*/
  }
  return (
    <form onSubmit={orderSubmitHandler}>
      <div className={styles['control-group']}>
        <label>Your name</label>
        {inputNameHasError ? (
          <div className='error-text'>You must enter a valid name!</div>
        ) : (
          ''
        )}
        <input
          className={inputNameHasError ? 'invalid' : ''}
          type='text'
          value={inputNameValue}
          onBlur={inputNameBlurHandler}
          onChange={inputNameChangeHandler}
        ></input>

        <label>Street</label>
        {inputStreetHasError ? (
          <div className='error-text'>You must enter street!</div>
        ) : (
          ''
        )}
        <input
          className={inputStreetHasError ? 'invalid' : ''}
          type='text'
          value={inputStreetValue}
          onBlur={inputStreetBlurHandler}
          onChange={inputStreetChangeHandler}
        ></input>
        <label>Postal code</label>
        {inputPostCodeHasError ? (
          <div className='error-text'>
            You must enter a valid Post code(length{'>'}=5)!
          </div>
        ) : (
          ''
        )}
        <input
          className={inputPostCodeHasError ? 'invalid' : ''}
          type='text'
          value={inputPostCodeValue}
          onBlur={inputPostCodeBlurHandler}
          onChange={inputPostCodeChangeHandler}
        ></input>
        <label>City</label>
        {inputCityHasError ? (
          <div className='error-text'>You must enter City!</div>
        ) : (
          ''
        )}
        <input
          className={inputCityHasError ? 'invalid' : ''}
          type='text'
          value={inputCityValue}
          onBlur={inputCityBlurHandler}
          onChange={inputCityChangeHandler}
        ></input>
      </div>
      <div className={styles.actions}>
        <button className={styles.button__alt} onClick={props.onClose}>
          {/*Close button */}
          Cancel
        </button>
        <button type='submit' disabled={!validForm} className={styles.button}>
          Confirm
        </button>
        {/*Order button */}
      </div>
    </form>
  );
};
export default CartForm;
