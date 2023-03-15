import { NavHeaderStyles } from "./styles/NavHeader.styles";
import { ContainerStyles } from "./styles/Container.styles";

export default function NavHeader() {
  return (
    <NavHeaderStyles>
      <ContainerStyles>
        <div>Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>Cart-icon</div>
      </ContainerStyles>
    </NavHeaderStyles>
  );
}
