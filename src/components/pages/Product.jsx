import { useParams } from "react-router-dom";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import * as Styled from "../styles/index";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Product() {
  let { id } = useParams();
  const { addToCart, clearCart } = useCart();
  const url = API_ONLINE_SHOP_URL + "/" + id;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>...........loading.............</div>;
  }

  if (error) {
    return <div>my error message</div>;
  }

  const { title, imageUrl, rating, price, discountedPrice, description } = data;

  function addToCartButtOnClick() {
    addToCart(data);
  }

  function clearToCartButtOnClick() {
    clearCart();
  }

  return (
    <Styled.Product>
      <Styled.BaseContainer>
        <h1></h1>
        <article>
          <h1>Product</h1>
          <div className="product-content-wrapper">
            <div className="image-wrapper">
              <img src={imageUrl} alt="" />
            </div>
            <article className="product-info-wrapper">
              <h2>{title}</h2>
              <div>{price}</div>
              <div>{discountedPrice}</div>
              <div>{rating}</div>
              <div>{description}</div>
              <button onClick={addToCartButtOnClick}>Add to cart</button>
              <button onClick={clearToCartButtOnClick}>Clear cart</button>
              <Link to={`/checkout`}>Go to checkout</Link>
            </article>
          </div>
        </article>
      </Styled.BaseContainer>
    </Styled.Product>
  );
}
