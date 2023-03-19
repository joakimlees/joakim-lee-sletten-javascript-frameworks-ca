import * as Styles from "./styles/index";
import cart from "../build/images/cart.svg";
import { Link } from "react-router-dom";

export function NavHeader() {
  return (
    <Styles.NavHeader>
      <div className="logo">Ecom-Store</div>
      <Styles.TopNavContainer>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
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
