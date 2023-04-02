import { Link } from "react-router-dom";
import * as Styles from "./styles/index";
import { useCart } from "../hooks/useCart";
import { calculateDiscountValue } from "../utils/calculateDiscountValue";

export function ProductCard({ product: { id, title, imageUrl, rating, price, discountedPrice }, product }) {
  const { addToCart } = useCart();

  function addToCartButtonClick() {
    addToCart(product);
  }

  return (
    <Styles.ProductCard>
      <article>
        <div className="image-wrapper">
          <img src={imageUrl} alt="" />
        </div>
        <h3>{title}</h3>
        <div className="rating">Rating: {rating}</div>
        <div className="price-wrapper">
          {discountedPrice < price ? (
            <>
              <div>Price: {discountedPrice + ",-"}</div>
              <div className="old-price">{price + ",-"}</div>
              <div className="discount-value"> Save: {calculateDiscountValue(price, discountedPrice) + "%"}</div>
            </>
          ) : (
            <>
              <div>Price: {price + ",-"}</div>
            </>
          )}
          {/*<div className="price">Price {price}</div>
          <div className="discount-price">discount Price: {discountedPrice}</div> */}
        </div>
        <div className="button-wrapper">
          <button onClick={addToCartButtonClick}>Add to cart</button>
          <Link to={`/product/${id}`}>See details</Link>
        </div>
      </article>
    </Styles.ProductCard>
  );
}
