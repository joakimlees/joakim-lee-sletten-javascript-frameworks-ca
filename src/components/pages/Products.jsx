import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../ProductCard";
import * as Styles from "../styles/index";

export function Products() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

  //consider refactor and move li to product card and key with same item as props

  if (data.length > 0) {
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
