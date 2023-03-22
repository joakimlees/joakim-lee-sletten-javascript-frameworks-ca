import "./App.css";
import { GlobalStyles } from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import * as Styles from "./components/styles/index";
import * as Page from "./components/pages/index";
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
          <Route path="product" element={<Page.Product />} />
          <Route path="cart" element={<Page.Cart />} />
          <Route path="checkout" element={<Page.Checkout />} />
          <Route path="checkout-success" element={<Page.CheckoutSuccess />} />
          <Route path="contact" element={<Page.Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
