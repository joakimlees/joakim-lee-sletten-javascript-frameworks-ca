import * as Styled from "../styles/index";
import { useCartStore } from "../../hooks/useCart";

export function Home() {
  const test = useCartStore(state => state.products);
  return (
    <Styled.Home>
      <Styled.BaseContainer>
        {console.log(
          test.map(product => {
            console.log(product);
          })
        )}
        <h1>Home</h1>
      </Styled.BaseContainer>
    </Styled.Home>
  );
}
