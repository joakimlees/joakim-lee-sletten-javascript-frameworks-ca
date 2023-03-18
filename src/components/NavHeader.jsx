import * as Styles from "./styles/index";
import cart from "../build/images/cart.svg";

export function NavHeader() {
  return (
    <Styles.NavHeader>
      <div className="logo">Ecom-Store</div>
      <Styles.TopNavContainer>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="cart-container">
          <div className="cart-counter">0</div>
          <div className="cart-icon-wrapper">
            <img src={cart} alt="logo" />
          </div>
        </div>
      </Styles.TopNavContainer>
    </Styles.NavHeader>
  );
}
