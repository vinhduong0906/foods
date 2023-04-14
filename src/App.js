import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import MealsContext from './store/meals-context';
import CartContext from './store/cart-context';
import Meals from './components/Meals/Meals';
import useHttp from './hooks/use-http';
import Modal from './components/UI/Modal';
import { useEffect, useState, useContext } from 'react';
function App() {
  const [dummyMeals, setDummyMeals] = useState([]);
  const ctxCart = useContext(CartContext);
  {
    /*---------------Fetch data from firebase.com----------------*/
  }
  const getdata = (data) => {
    console.log(data);
    for (const key in data) {
      setDummyMeals((prevState) => [...prevState, data[key]]);
    }
    console.log(dummyMeals);
  };

  const { sendRequest } = useHttp();
  const requestConfig = {
    url: 'https://movie-http-2c424-default-rtdb.firebaseio.com/foods.json',
  };
  useEffect(() => {
    console.log('use effect run');
    sendRequest(requestConfig, getdata);
  }, []);
  {
    /*---------------Return JSX code1----------------*/
  }
  return (
    <div className='App'>
      <MealsContext.Provider value={dummyMeals}>
        <Header />
        <Meals />
      </MealsContext.Provider>
    </div>
  );
}

export default App;
