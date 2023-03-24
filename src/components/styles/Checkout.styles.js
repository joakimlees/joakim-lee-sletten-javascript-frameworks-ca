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
      gap: 20px;

      .product-wrapper {
        flex-grow: 1;
        border: solid;
        background-color: red;
      }

      .summary-wrapper {
        border: solid;
        background-color: lightgreen;
      }
    }

    .payment-info-wrapper {
      border: solid;
      background-color: grey;
    }
  }
`;
