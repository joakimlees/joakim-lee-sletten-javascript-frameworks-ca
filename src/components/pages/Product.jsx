import { useParams } from "react-router-dom";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
//import { useFetch } from "../../hooks/useFetch";
import * as Styled from "../styles/index";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";
import { useProducts, useProductStore } from "../../hooks/useProductStore";

export function Product() {
  const { id } = useParams();
  //const { addToCart, clearCart } = useCart();
  const url = API_ONLINE_SHOP_URL + "/" + id;
  //const { data, loading, error } = useFetch(url);
  const { fetchProduct, product, isLoading, hasError } = useProducts();
  const { addToCart, clearCart } = useCart();

  useEffect(() => {
    fetchProduct(url);
  }, [url]);

  if (isLoading) {
    return <div>...........loading.............</div>;
  }

  if (hasError) {
    return <div>my error message</div>;
  }

  const { title, imageUrl, rating, price, discountedPrice, description } = product;

  function addToCartButtOnClick() {
    addToCart(product);
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
