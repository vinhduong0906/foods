import styles from './AvailableMeals.module.css';
import MealsContext from '../../store/meals-context';
import MealItem from './MealItem/MealItem';
import React, { useContext } from 'react';
import Card from '../UI/Card';
const AvailableMeals = () => {
  //Show the meals is available in shop on 'Meals Component'
  const meals = useContext(MealsContext);
  return (
    <Card>
      {meals.map((meal) => {
        return <MealItem item={meal} key={meal.id} />;
      })}
    </Card>
  );
};
export default AvailableMeals;
