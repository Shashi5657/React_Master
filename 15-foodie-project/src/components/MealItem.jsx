//created this component to specify each meal
//given the styling & mainly for structuring using this component
//it gets a props as meal
//for that image , we need to get image from the backend server, so used the link with `` keys

import {currencyFormatter} from "../util/formatting"
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
            <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
