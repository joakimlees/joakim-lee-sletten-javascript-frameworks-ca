import * as Styled from "../styles/index";
import { useCartStore } from "../../hooks/useCart";

export function Cart() {
  const test = useCartStore(state => state.products);

  const vals = test.map(function (a) {
    return a;
  });

  console.log(vals);

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
