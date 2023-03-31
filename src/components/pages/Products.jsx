import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../ProductCard";
import * as Styles from "../styles/index";
import { useEffect } from "react";

export function Products() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

  return (
    <Styles.Products>
      <Styles.BaseContainer>
        <h2>List of products</h2>
        <ul>
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </Styles.BaseContainer>
    </Styles.Products>
  );
}
