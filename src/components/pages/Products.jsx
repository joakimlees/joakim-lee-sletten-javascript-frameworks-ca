import { API_ONLINE_SHOP_URL } from "../../api/constants";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../ProductCard";
import * as Styles from "../styles/index";
import useSearch from "../../hooks/useSearch";

export function Products() {
  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);
  const { onSearchChange, setDataToSearch } = useSearch();

  const searchedData = setDataToSearch(data);

  if (loading) {
    return <div>loading..................</div>;
  }

  if (error) {
    return <div>my error</div>;
  }

  return (
    <Styles.Products>
      <Styles.BaseContainer>
        <form>
          <fieldset>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" onChange={onSearchChange} />
          </fieldset>
        </form>
        <h2>List of products</h2>
        {searchedData ? (
          <ul>
            {searchedData.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <h3 className="no-searchMatch-heading">No matching products</h3>
        )}
      </Styles.BaseContainer>
    </Styles.Products>
  );
}
