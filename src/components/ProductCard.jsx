import * as Styles from "./styles/index";

export function ProductCard({ product: { title, imageUrl, rating, price, discountPrice } }) {
  return (
    <Styles.ProductCard>
      <div className="image-wrapper">
        <img src={imageUrl} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="rating">Rating:</div>
      <div className="price">Product Price:</div>
      <div className="discount-price">Discount Price:</div>
      <button>Click me</button>
    </Styles.ProductCard>
  );
}
