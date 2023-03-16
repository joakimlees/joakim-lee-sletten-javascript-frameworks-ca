import styled from "styled-components";

export const BaseContainer = styled.div`
  max-width: 1600px;
  margin: 0px auto;
  padding: 0px 25px;

  border-color: green;
  border-style: solid;
`;

export const TopNavContainer = styled(BaseContainer)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-color: ${props => props.theme.color.primary};
`;