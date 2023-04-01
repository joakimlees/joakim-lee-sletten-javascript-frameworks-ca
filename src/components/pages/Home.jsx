import * as Styled from "../styles/index";
import { useFetch } from "../../hooks/useFetch";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { ProductCard } from "../ProductCard";

export function Home() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

  return (
    <Styled.Home>
      <Styled.BaseContainer>
        <h1>Home</h1>
        <ul>
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </Styled.BaseContainer>
    </Styled.Home>
  );
}
