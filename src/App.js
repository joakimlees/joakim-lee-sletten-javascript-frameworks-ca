import "./App.css";
import { NavHeader } from "./components/NavHeader";
import { Footer } from "./components/Footer";
import { GlobalStyles } from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import * as Styles from "./components/styles/index";

function App() {
  return (
    <ThemeProvider theme={Styles.theme}>
      <>
        <GlobalStyles />
        <NavHeader />
        <main className="test">hello world</main>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
