import "./App.css";
import NavHeader from "./components/NavHeader";
import { GlobalStyles } from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import * as Styles from "./components/styles/index";

function App() {
  return (
    <ThemeProvider theme={Styles.theme}>
      <>
        <GlobalStyles />
        <NavHeader />
      </>
    </ThemeProvider>
  );
}

export default App;
