import styled from "styled-components";

export const BaseContainer = styled.div`
  max-width: 1600px;
  margin: 0px auto;
  padding: 0px 25px;
`;

export const TopNavContainer = styled(BaseContainer)`
  display: flex;
  align-items: baseline;
  border-top: 1px solid ${props => props.theme.color.light};

  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: ${props => props.theme.font.size.small};
  }
`;
