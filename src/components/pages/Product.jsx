import { useParams } from "react-router-dom";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import * as Styled from "../styles/index";

export function Product() {
  let { id } = useParams();
  const url = API_ONLINE_SHOP_URL + "/" + id;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

  const { title, imageUrl, rating, price, discountedPrice } = data;

  return (
    <Styled.Product>
      <Styled.BaseContainer>
        <h1>hello{console.log(data)}</h1>
        <article>
          <h1>{title}</h1>
        </article>
      </Styled.BaseContainer>
    </Styled.Product>
  );
}
