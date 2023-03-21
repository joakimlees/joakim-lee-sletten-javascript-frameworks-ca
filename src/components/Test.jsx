import { API_ONLINE_SHOP_URL } from "../api/constants";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useFetch } from "../api/getData";

export function Test() {
  const { data } = useFetch(API_ONLINE_SHOP_URL);

  /*const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getData(API_ONLINE_SHOP_URL));
    };
    getProducts();
  }, []);

  if (products instanceof Error) {
    return <div>It was an error</div>;
  }
  */

  if (data.length > 0) {
    return (
      <article>
        <h1>products</h1>
        {data.map(product => (
          <div>{product.title}</div>
        ))}
      </article>
    );
  }
}
