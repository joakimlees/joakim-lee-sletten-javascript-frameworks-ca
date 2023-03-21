import { API_ONLINE_SHOP_URL } from "../api/constants";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export function Test() {
  const [products, setProducts] = useState([]);

  // The useEffect will run once when the component first mounts
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(API_ONLINE_SHOP_URL);
      const json = await response.json();
      // Setting our `posts` state to the API data we received
      setProducts(json);
    }
    getData();
  }, []);

  return (
    <article>
      <h1>Products</h1>
      {products.map(product => (
        <ProductCard />
      ))}
    </article>
  );
}
