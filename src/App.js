import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import MealsContext from './store/meals-context';
import Meals from './components/Meals/Meals';
function App() {
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
      price: 16.99,
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
  return (
    <div className='App'>
      <MealsContext.Provider value={DUMMY_MEALS}>
        <Header />
        <Meals />
      </MealsContext.Provider>
    </div>
  );
}

export default App;
