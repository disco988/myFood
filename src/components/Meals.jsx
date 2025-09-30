import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        console.log("Fetching meals failed!");
      }

      const meals = await response.json();

      setLoadedMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem item={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
