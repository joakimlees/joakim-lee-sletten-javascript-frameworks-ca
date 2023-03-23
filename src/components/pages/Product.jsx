import { useParams } from "react-router-dom";
import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import * as Styled from "../styles/index";

export function Product() {
  let { id } = useParams();
  const url = API_ONLINE_SHOP_URL + "/" + id;
  const { data, loading, error } = useFetch(url);

  return (
    <Styled.Product>
      <Styled.BaseContainer>
        <h1>hello{console.log(data)}</h1>
      </Styled.BaseContainer>
    </Styled.Product>
  );
}
