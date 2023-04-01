import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function CheckoutSuccess() {
  const { clearCart, cart } = useCart();

  // refactor to function and refactor names
  // map current cart id's
  const arr = cart.map(products => {
    return products.id;
  });

  //get quantity and return array with count
  const number = arr.reduce((counts, id) => {
    counts[id] = (counts[id] || 0) + 1;
    return counts;
  }, {});
  const finalCart = cart.map(product => ({
    ...product,
    count: number[product.id] || 0,
  }));

  //filter cart items, returning only the first object (first index), which have the same id as some other object.
  const newArray = finalCart.filter((items, index) => cart.findIndex(item => item.id === items.id) === index);
  console.log(newArray);

  function clearToCartButtOnClick() {
    clearCart();
  }

  useEffect(() => {
    clearToCartButtOnClick();
  }, []);

  return (
    <Styled.CheckoutSuccess>
      <Styled.BaseContainer>
        <h1>Order successfully completed</h1>
        <article>
          <h2>Thanks for your purchase</h2>
          <Link to={"/"}>Back to home page</Link>
        </article>
        <article>
          <h2>Order summary</h2>
          <ul>
            {newArray.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        </article>
      </Styled.BaseContainer>
    </Styled.CheckoutSuccess>
  );
}
