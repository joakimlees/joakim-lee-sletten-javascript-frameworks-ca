import * as Styles from "./styles/index";

export function ProductCard({ product: { title, imageUrl, rating, price, discountedPrice } }) {
  return (
    <Styles.ProductCard>
      <div className="image-wrapper">
        <img src={imageUrl} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="rating">Rating: {rating}</div>
      <div className="price-wrapper">
        <div className="price">Price {price}</div>
        <div className="discount-price">discount Price: {discountedPrice}</div>
      </div>
      <button>Click me</button>
    </Styles.ProductCard>
  );
}
