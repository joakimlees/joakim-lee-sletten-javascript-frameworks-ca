import * as Styles from "./styles/index";

export function CartItem({ product: { id, count, title, imageUrl, rating, price, discountedPrice } }) {
  return (
    <Styles.CartItem>
      <article>
        <div className="image-wrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="middle-wrapper">
          <h3>{title}</h3>
          <div>price: {price}</div>
        </div>
        <div className="quantity-wrapper">
          <div>Quantity: x{count}</div>
        </div>
      </article>
    </Styles.CartItem>
  );
}
