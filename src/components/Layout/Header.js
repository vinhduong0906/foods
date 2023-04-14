import styles from './Header.module.css';
import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import image from '../../assets/meals.jpg';
const Header = () => {
  //Display header of page
  return (
    <React.Fragment>
      <div className={styles['main-image']}>
        {/*Header's background image */}
        <img src={image} />
      </div>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
        {/*--------Cart button */}
      </header>
    </React.Fragment>
  );
};
export default Header;
