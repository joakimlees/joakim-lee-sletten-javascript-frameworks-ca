import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  flex-direction: ${props => (props.directionColumn ? "column" : "row")};
  justify-content: space-around;
  max-width: 1600px;
  margin: 0px auto;

  border-color: green;
  border-style: solid;
`;
