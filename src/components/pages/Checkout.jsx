import * as Styled from "../styles/index";

export function Checkout() {
  return (
    <Styled.Checkout>
      <Styled.BaseContainer>
        <h1>Checkout page</h1>
        <article>
          <h2>Your order</h2>
          <article className="content-wrapper">
            <div className="order-details-wrapper">
              <div className="product-wrapper">
                <h3>Products</h3>
                <h4>product name</h4>
                <div>price</div>
              </div>
              <div className="summary-wrapper">
                <h3>Summary</h3>
                <div>name</div>
              </div>
            </div>
            <div className="payment-info-wrapper">
              <h3>payment information</h3>
            </div>
          </article>
        </article>
      </Styled.BaseContainer>
    </Styled.Checkout>
  );
}
