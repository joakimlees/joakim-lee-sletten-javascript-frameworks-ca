import * as Styles from "./styles/index";

export function CartItem({ product: { id, count, title, imageUrl, rating, price, discountedPrice } }) {
  return (
    <Styles.CartItem>
      <div>{id}</div>
      <div>{title}</div>
      <div>{count}</div>
      <div>{rating}</div>
    </Styles.CartItem>
  );
}
