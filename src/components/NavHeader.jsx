import * as Styles from "./styles/index";
import cart from "../build/images/cart.svg";

export default function NavHeader() {
  return (
    <Styles.NavHeader>
      <Styles.TopNavContainer>
        <div>Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Styles.CartContainer>
          <div>0</div>
          <Styles.CartIconWrapper>
            <img src={cart} alt="logo" />
          </Styles.CartIconWrapper>
        </Styles.CartContainer>
      </Styles.TopNavContainer>
    </Styles.NavHeader>
  );
}
