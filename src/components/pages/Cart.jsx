import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { Link } from "react-router-dom";

export function Cart() {
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

  if (newArray.length < 1) {
    return (
      <Styled.Cart>
        <Styled.BaseContainer>
          <h1>Cart page</h1>
          <div>You have no products in your cart</div>
        </Styled.BaseContainer>
      </Styled.Cart>
    );
  }

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
        <ul>
          {newArray.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="button-wrapper">
          <button onClick={clearToCartButtOnClick}>Clear cart</button>
          <Link to="/checkout-success">Complete order</Link>
        </div>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
