import React, { useState, useReducer } from 'react';
const initialState = { value: '', isTouch: false };

const useInput = (validateValue) => {
  const inputReducer = (state, action) => {
    if (action.type === 'CHANGE') {
      return { value: action.value, isTouch: true };
    }
    if (action.type === 'BLUR') {
      return { isTouch: true, value: state.value };
    }
    if (action.type === 'RESET') {
      return { value: '', isTouch: false };
    }
  };

  const [state, dispatch] = useReducer(inputReducer, initialState);
  const inputValid = validateValue(state.value);
  const hasError = !inputValid && state.isTouch;
  const inputChangeHandler = (event) => {
    dispatch({ type: 'CHANGE', value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };
  return {
    inputValue: state.value,
    hasError,
    inputValid: inputValid,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};
export default useInput;
