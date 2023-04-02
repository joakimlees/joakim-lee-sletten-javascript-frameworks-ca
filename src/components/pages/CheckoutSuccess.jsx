import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addCountProperty } from "../../utils/addCountProperty";
import { getTotalPrice } from "../../utils/getTotalPrice";

export function CheckoutSuccess() {
  const { clearCart, cart } = useCart();

  const newCart = addCountProperty(cart);

  const roundedTotalPrice = getTotalPrice(newCart);

  useEffect(() => {
    function clearTheCart() {
      clearCart();
    }

    clearTheCart();
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
          <div className="total-price">Total Price: {roundedTotalPrice}</div>
          <ul>
            {newCart.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        </article>
      </Styled.BaseContainer>
    </Styled.CheckoutSuccess>
  );
}
