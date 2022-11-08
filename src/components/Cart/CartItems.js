import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.price;

  return (
    <li className={styles["cart-item"]}>
      <div className={styles.summery_box}>
        <img className={styles.cart_img} src={props.image} alt={props.name} />
        <div>
          <h2>{props.name}</h2>
          <div className={styles.summary}>
            <span className={styles.price}>{price}</span>
            <span className={styles.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
