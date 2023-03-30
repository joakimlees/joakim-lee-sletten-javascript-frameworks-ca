import { API_ONLINE_SHOP_URL } from "../../api/constants";
//import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../ProductCard";
import * as Styles from "../styles/index";
import { useProducts, useProductStore } from "../../hooks/useProductStore";
import { useEffect } from "react";

export function Products() {
  //const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);

  const { fetchProducts, products, isLoading, hasError } = useProducts();

  useEffect(() => {
    fetchProducts(API_ONLINE_SHOP_URL);
  }, [API_ONLINE_SHOP_URL]);

  if (isLoading) {
    return <div>loading..................</div>;
  }

  if (hasError) {
    return <div>my error</div>;
  }

  return (
    <Styles.Products>
      <Styles.BaseContainer>
        <h2>List of products</h2>
        <ul>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </Styles.BaseContainer>
    </Styles.Products>
  );
}

/*
    return (
      <Styles.Products>
        <Styles.BaseContainer>
          <h2>List of products</h2>
          <ul>
            {data.map(product => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </Styles.BaseContainer>
      </Styles.Products>
    );
  }
}
*/
