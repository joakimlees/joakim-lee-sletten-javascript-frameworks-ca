import * as Styles from "./styles/index";
import { ThemeProvider } from "styled-components";

export default function NavHeader() {
  return (
    <ThemeProvider theme={Styles.theme}>
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
            <div>cart-icon</div>
            <div>counter: 0</div>
          </div>
        </Styles.TopNavContainer>
      </Styles.NavHeader>
    </ThemeProvider>
  );
}
