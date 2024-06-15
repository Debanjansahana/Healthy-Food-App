
import styles from "./item.module.css";

const Item = ({foodItems}) => {

const handelBuyButtonClick = (foodItems) =>
  {
    console.log(`${foodItems} being bought`)
  }


  return (
    <li className={`${styles["ds-item"]} list-group-item`}>
      <span className={styles["ds-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-dark}`}
        onClick={() => handelBuyButtonClick()}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;