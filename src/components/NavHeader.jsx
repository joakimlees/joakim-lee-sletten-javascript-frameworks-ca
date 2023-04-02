import * as Styles from "./styles/index";
import cartImg from "../build/images/cartImg.svg";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function NavHeader() {
  const { cart } = useCart();

  const cartCount = cart.length;

  return (
    <Styles.NavHeader>
      <div className="logo">
        <Link to="/">Ecom-Store</Link>
      </div>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Link to="/cart">
          <div className="cart-container">
            <div className="cart-counter">{cartCount}</div>
            <div className="cart-icon-wrapper">
              <img src={cartImg} alt="logo" />
            </div>
          </div>
        </Link>
      </Styles.TopNavContainer>
    </Styles.NavHeader>
  );
}
