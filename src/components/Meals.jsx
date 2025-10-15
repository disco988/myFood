import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching data...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch Meals" message={error}></Error>;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem item={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
