import * as Styled from "../styles/index";
import { useCartStore } from "../../hooks/useCart";

export function Home() {
  const test = useCartStore(state => state.products);

  const vals = test.map(function (a) {
    return a.title;
  });

  console.log(vals);

  return (
    <Styled.Home>
      <Styled.BaseContainer>
        <h1>Home</h1>
      </Styled.BaseContainer>
    </Styled.Home>
  );
}
