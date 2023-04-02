import styled from "styled-components";

export const Home = styled.main`
  flex-grow: 1;

  h1 {
    color: ${({ theme }) => theme.color.primary};
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.xxLarge};
  }

  ul {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px;
    list-style: none;
  }

  @media (max-width: ${({ theme }) => theme.screen.small}) {
    h1 {
      font-size: ${({ theme }) => theme.font.size.xLarge};
    }
  }
`;
