import styled from "styled-components";

export const Checkout = styled.main`
  flex-grow: 1;
  border: solid;
  background-color: lightblue;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .order-details-wrapper {
      display: flex;
      background-color: red;
      gap: 20px;

      .product-wrapper {
        flex-grow: 1;
        border: solid;
      }

      .summary-wrapper {
        border: solid;
      }
    }

    .payment-info-wrapper {
      border: solid;
    }
  }
`;
