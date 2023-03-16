import * as Styles from "./styles/index";

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
        <div>
          <div>
            <img src="" alt="shopping-cart-icon" />
          </div>
          <div>counter: 0</div>
        </div>
      </Styles.TopNavContainer>
    </Styles.NavHeader>
  );
}
