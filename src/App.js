import "./App.css";
import { NavHeader } from "./components/NavHeader";
import { Footer } from "./components/Footer";
import { GlobalStyles } from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import * as Styles from "./components/styles/index";
import * as Page from "./components/pages/index";
import { Test } from "./components/Test";

function App() {
  return (
    <ThemeProvider theme={Styles.theme}>
      <GlobalStyles />
      <NavHeader />
      <Test />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
