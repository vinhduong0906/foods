import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
  //Show meal item on meal list
  return (
    <div className={styles.meal}>
      <div className={styles['meal-item']}>
        {/**Meal description */}
        <h3>{props.item.name}</h3>
        <div className={styles.description}> {props.item.description}</div>
        <div className={styles.price}>{props.item.price}</div>
      </div>
      <MealItemForm item={props.item} />
      {/**Amount input form */}
    </div>
  );
};
export default MealItem;
