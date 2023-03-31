import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { useFetch } from "../../hooks/useFetch";
import { API_ONLINE_SHOP_URL } from "../../api/constants";

export function Cart() {
  const { cart } = useCart();

  console.log("before");
  console.log(cart);
  console.log("after");

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
        <div>{/*console.log(cart)*/}</div>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
