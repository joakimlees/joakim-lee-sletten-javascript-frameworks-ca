import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { useFetch } from "../../hooks/useFetch";
import { API_ONLINE_SHOP_URL } from "../../api/constants";

export function Cart() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);
  const { cart } = useCart();

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
        <div>{/*console.log(cart)*/}</div>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
