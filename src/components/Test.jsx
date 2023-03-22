import { API_ONLINE_SHOP_URL } from "../api/constants";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useFetch } from "../api/getData";

export function Test() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

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
