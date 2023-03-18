import { API_ONLINE_SHOP_URL } from "../api/constant";
import React, { useEffect, useState } from "react";

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
    <div>
      {products.map(product => (
        <div>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}
