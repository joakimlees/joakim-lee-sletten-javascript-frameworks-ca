import { NavHeaderStyles } from "./styles/NavHeader.styles";
import * as styles from "./styles/index";
import { ThemeProvider } from "styled-components";

export default function NavHeader() {
  return (
    <ThemeProvider theme={styles.theme}>
      <NavHeaderStyles>
        <styles.TopNavContainer>
          <div>Logo</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div>
            <div>cart-icon</div>
            <div>counter: 0</div>
          </div>
        </styles.TopNavContainer>
      </NavHeaderStyles>
    </ThemeProvider>
  );
}
