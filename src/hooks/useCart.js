import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

//zustand global state manage hook for cart
// creates cart array, and function to add objects to it and function to clear the cart
export const useCartStore = create(set => ({
  cart: [],
  addToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title, price: item.price, imageUrl: item.imageUrl, rating: item.rating, discountedPrice: item.discountedPrice, description: item.description }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

// cart hook which returns:
//function to add item to cart
//function to clear cart
//return the cart
//also utilize local stroage hook, to also add the cart, fetch the cart(if needed) and clear the cart from local storage.
export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);
  const [value, setValue] = useLocalStorage();

  if (cart.length < 1 && value) {
    cart.push(...value);
  }

  function addToCart(id) {
    add(id);
    setValue(cart);
  }

  function clearCart() {
    clear();
    setValue([]);
  }

  return { addToCart, clearCart, cart };
}
