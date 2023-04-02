import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addCountProperty } from "../../utils/addCountProperty";
import { getTotalPrice } from "../../utils/getTotalPrice";

export function CheckoutSuccess() {
  return (
    <Styled.CheckoutSuccess>
      <Styled.BaseContainer>
        <h1>Order successfully completed</h1>
        <article>
          <h2>Thanks for your purchase</h2>
          <Link to={"/"}>Back to home page</Link>
        </article>
      </Styled.BaseContainer>
    </Styled.CheckoutSuccess>
  );
}
