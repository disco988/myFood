import Button from "./Button";
import { currencyFormater } from "../utils/currencyFormater";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

const MealItem = ({ item }) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);

  const handleAddItem = () => {
    cartCtx.addItem(item);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p className="meal-item-price">
            {currencyFormater.format(item.price)}
          </p>
          <p className="meal-item-description">{item.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItem}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
