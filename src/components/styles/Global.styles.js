import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


body {
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
}


.error-fetch, .loading-fetch {
    font-size: ${({ theme }) => theme.font.size.xLarge};
    text-align: center;
    margin-top: 70px;
    font-family: ${({ theme }) => theme.font.family.paragraphs};
  }

  .error-fetch {
    color: ${({ theme }) => theme.color.red};
  }

#root {
  height: 100%;
}

.site-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

img {
  width: 100%;
}





`;

/*

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap'); 
*/
