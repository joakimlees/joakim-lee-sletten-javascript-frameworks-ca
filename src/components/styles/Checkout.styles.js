import styled from "styled-components";

export const Checkout = styled.main`
  flex-grow: 1;

  background-color: lightblue;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      border-bottom: solid 1px;
    }

    .order-details-wrapper {
      display: flex;
      gap: 20px;
      border-bottom: solid 1px;

      .product-wrapper {
        flex-grow: 1;

        background-color: red;
      }

      .summary-wrapper {
        background-color: lightgreen;
      }
    }

    .payment-info-wrapper {
      background-color: grey;
    }
  }
`;
