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
    return <div className="loading-fetch">loading.....</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <Styles.Products>
      <Styles.BaseContainer>
        <h1>Products page</h1>
        <form>
          <fieldset>
            <label htmlFor="search">Search for product</label>
            <input type="text" name="search" placeholder="Search here..." onChange={onSearchChange} />
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
          <h3 className="no-searchMatch-heading">No products match your current search</h3>
        )}
      </Styles.BaseContainer>
    </Styles.Products>
  );
}
