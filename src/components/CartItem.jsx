import * as Styles from "./styles/index";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";

export function CartItem({ product: { id, count, title, imageUrl, rating, price, discountedPrice } }) {
  return (
    <Styles.CartItem>
      <article>
        <div className="image-wrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="middle-wrapper">
          <h3>{title}</h3>
          {discountedPrice < price ? <div>price: {calculateTotalPrice(discountedPrice, count).toFixed(2) + ",-"}</div> : <div>price: {calculateTotalPrice(price, count).toFixed(2) + ",-"}</div>}
        </div>
        <div className="quantity-wrapper">
          <div>Quantity: x{count}</div>
        </div>
      </article>
    </Styles.CartItem>
  );
}
