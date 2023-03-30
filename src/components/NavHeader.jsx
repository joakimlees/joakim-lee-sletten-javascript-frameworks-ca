import * as Styles from "./styles/index";
import cart from "../build/images/cart.svg";
import { Link } from "react-router-dom";
import { useCartStore } from "../hooks/useCart";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

export function NavHeader() {
  const localCart = useCartStore(state => state.getLocalStorage);
  const cart = useCartStore(state => state.cart);
  //const [value, setValue] = useLocalStorage();

  useEffect(() => {
    const test = localCart();
    console.log(test);
  }, [cart]);

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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Link to="/cart">
          <div className="cart-container">
            <div className="cart-counter">0</div>
            <div className="cart-icon-wrapper">
              <img src={cart} alt="logo" />
            </div>
          </div>
        </Link>
      </Styles.TopNavContainer>
    </Styles.NavHeader>
  );
}
