import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import styles from './Meals.module.css';
const Meals = () => {
  return (
    <div className={styles.meals}>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};
export default Meals;
