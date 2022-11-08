import React, { useContext, useEffect, useState } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const [salePrice, setSalePrice] = useState();
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  useEffect(() => {
    const saleCalculator = (discount, price) => {
      if (typeof discount === "number") {
        const sale = price * (1 - discount);
        setSalePrice(sale.toFixed(2));
      } else return;
    };

    saleCalculator(props.sale, props.price);
  }, [props]);

  const addToCartHandler = (amount) => {
    if (props.sale) {
      cartCtx.addItem({
        image: props.image,
        id: props.id,
        name: props.name,
        amount: amount,
        price: salePrice,
      });
    } else {
      cartCtx.addItem({
        image: props.image,
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    }
  };

  return (
    <li
      className={`${styles.product_card} ${
        salePrice ? styles.sale_align : ""
      }  `}
    >
      {salePrice && (
        <div
          data-content={`-${props.sale * 100}%`}
          className={styles.saleCard}
        ></div>
      )}
      <img
        className={styles.product_image}
        alt={props.name}
        src={`${props.image}`}
      ></img>
      <div className={styles.card_text}>
        <div className={styles.card_head}>
          <h3>{props.name}</h3>
          <div className={`${styles.price} ${salePrice ? styles.saleOn : ""}`}>
            {price}/kg
          </div>
          {salePrice && <span className={styles.sale}>${salePrice}/kg</span>}
        </div>
        <div>
          <MealItemForm
            onAddToCart={addToCartHandler}
            id={props.id}
            onAdd={props.onAdd}
          />
        </div>
      </div>
    </li>
  );
};
export default MealItem;
