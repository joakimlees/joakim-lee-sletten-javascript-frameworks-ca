import * as Styled from "../styles/index";
import { useFetch } from "../../hooks/useFetch";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { ProductCard } from "../ProductCard";

export function Home() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
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
