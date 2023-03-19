import "./App.css";
import { GlobalStyles } from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import * as Styles from "./components/styles/index";
import * as Page from "./components/pages/index";
import { Test } from "./components/Test";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={Styles.theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page.Home />} />
          <Route path="products" element={<Page.Products />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
