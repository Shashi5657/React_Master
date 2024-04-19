import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
    //initially the rendering takes tym, so to update the UI,
    //we used state, so that first it shows plane screen,
    //after the data is loaded, we can set the data to render by using setState
  const [loadedMeals, setLoadedMeals] = useState([]);

  //here if we directly call the function it ends up on infinite loop,
  // useEffect is used to avoid that side effect
  useEffect(() => {
    //so we created this function fetchMeals & used async to it
    async function fetchMeals() {
        //to fetch the data, we use fetch keyword & the link
        //fetch provides a promise , so we need to use async await,
        //but we cant directly use async with the main default function
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //..
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    //here we r calling that function,
    fetchMeals();
  }, []);

  //with the loaded meals we r mapping it in the list
  //used the MealItem component to render each item
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
