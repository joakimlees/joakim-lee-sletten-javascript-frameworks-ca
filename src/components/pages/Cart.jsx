import * as Styled from "../styles/index";
import { useCart } from "../../hooks/useCart";
import { useFetch } from "../../hooks/useFetch";
import { API_ONLINE_SHOP_URL } from "../../api/constants";

export function Cart() {
  const { cart } = useCart();

  // map current cart id's
  const arr = cart.map(products => {
    return products.id;
  });

  //get quantity and return array with count
  const number = arr.reduce((counts, id) => {
    counts[id] = (counts[id] || 0) + 1;
    return counts;
  }, {});
  const finalCart = cart.map(product => ({
    ...product,
    count: number[product.id] || 0,
  }));

  //filter cart items, returning only the first object (first index), which have the same id as some other object.
  const newArray = finalCart.filter((items, index) => cart.findIndex(item => item.id === items.id) === index);
  console.log(newArray);

  return (
    <Styled.Cart>
      <Styled.BaseContainer>
        <h1>Cart page</h1>
        <div>{/*console.log(cart)*/}</div>
      </Styled.BaseContainer>
    </Styled.Cart>
  );
}
