import { useParams } from "react-router-dom";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import * as Styled from "../styles/index";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Product() {
  const { id } = useParams();
  const url = API_ONLINE_SHOP_URL + "/" + id;
  const { data, loading, error } = useFetch(url);
  const { addToCart } = useCart();
  const { title, imageUrl, price, discountedPrice, rating, description } = data;

  if (loading) {
    return <div className="loading-fetch">loading......</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  function addToCartButtOnClick() {
    addToCart(data);
  }

  return (
    <Styled.Product>
      <Styled.BaseContainer>
        <article>
          <h1>Product</h1>
          <div className="product-content-wrapper">
            <div className="image-wrapper">
              <img src={imageUrl} alt={`image of ` + title} />
            </div>
            <article className="product-info-wrapper">
              <h2>{title}</h2>
              Price: {discountedPrice < price ? discountedPrice + ",-" : price + ",-"}
              <div>Rating: {rating}</div>
              <div>Details: {description}</div>
              <div className="button-wrapper">
                <button onClick={addToCartButtOnClick}>Add to cart</button>
                <Link to={"/cart"}>View Cart</Link>
              </div>
            </article>
          </div>
        </article>
      </Styled.BaseContainer>
    </Styled.Product>
  );
}
