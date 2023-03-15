import { NavHeaderStyles } from "./styles/NavHeader.styles";
import { ContainerStyles } from "./styles/Container.styles";

export default function NavHeader() {
  return (
    <NavHeaderStyles>
      <ContainerStyles directionColumn={false}>
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
      </ContainerStyles>
    </NavHeaderStyles>
  );
}
