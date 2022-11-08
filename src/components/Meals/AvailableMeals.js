import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useParams } from "react-router-dom";
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const { department } = useParams();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-food-645a1-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Somthing went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        if (responseData[key].sale) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            image: responseData[key].image,
            price: responseData[key].price,
            type: responseData[key].type,
            sale: responseData[key].sale,
          });
        } else {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            image: responseData[key].image,
            price: responseData[key].price,
            type: responseData[key].type,
          });
        }
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    if (department === meal.type) {
      if (!!meal.sale) {
        return (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            sale={meal.sale}
            image={meal.image}
          />
        );
      } else {
        return (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            image={meal.image}
          />
        );
      }
    } else if (
      (department === "sales" && meal.sale) ||
      (!department && meal.sale)
    ) {
      return (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
          sale={meal.sale}
          image={meal.image}
        />
      );
    }
  });

  return (
    <section className={styles.meals}>
      <ul className={styles.card_layout}>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
