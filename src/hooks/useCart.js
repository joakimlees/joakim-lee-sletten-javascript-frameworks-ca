import { useEffect } from "react";
import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

export const useCartStore = create(set => ({
  cart: [],
  addToCart: item => {
    set(state => ({ cart: [{ title: item.title }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);

  const [value, setValue] = useLocalStorage();

  useEffect(() => {
    if (cart.length === 0 && value) {
      cart.push(...value);
      console.log(cart);
      console.log("set local to cart");
    }
  }, [cart]);

  function addToCart(id) {
    console.log(cart);
    console.log("click ADD TO CART");
    add(id);
    console.log("click cart TO local");
    setValue(cart);
  }

  function clearCart() {
    clear();
    setValue([]);
  }

  return { addToCart, clearCart };
}
