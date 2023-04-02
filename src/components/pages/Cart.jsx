import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { addCountProperty } from "../../utils/addCountProperty";

export function Cart() {
  const { clearCart, cart } = useCart();

  const newCart = addCountProperty(cart);

  const roundedTotalPrice = getTotalPrice(newCart);

  function clearToCartButtOnClick() {
    clearCart();
  }

  if (newCart.length < 1) {
    return (
      <Styled.Cart>
        <Styled.BaseContainer>
          <h1>Cart page</h1>
          <div className="no-products-message">You have no products in your cart</div>
        </Styled.BaseContainer>
      </Styled.Cart>
    );
  }

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
        <h2>Products in your cart</h2>
        <ul>
          {newCart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="total-price">Total Price: {roundedTotalPrice + ",-"} </div>
        <div className="button-wrapper">
          <button onClick={clearToCartButtOnClick}>Clear cart</button>
          <Link to="/checkout-success" onClick={clearToCartButtOnClick}>
            Complete order
          </Link>
        </div>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
