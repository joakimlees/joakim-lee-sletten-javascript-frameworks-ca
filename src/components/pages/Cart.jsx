import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";

export function Cart() {
  const { cart } = useCart();

  const vals = cart.map(function (a) {
    return a;
  });

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
        <div>{console.log(cart)}</div>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
