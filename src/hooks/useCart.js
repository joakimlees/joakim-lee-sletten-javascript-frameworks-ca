import { useEffect } from "react";
import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";
import { useFetch } from "./useFetch";
import { API_ONLINE_SHOP_URL } from "../api/constants";

export const useCartStore = create(set => ({
  cart: [],
  addToCart: item => {
    set(state => ({ cart: [{ id: item.id }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

// REFACTOR names!!!

export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);
  const [value, setValue] = useLocalStorage();

  // start

  const { data, loading, error } = useFetch(API_ONLINE_SHOP_URL);
  // end

  if (cart.length < 1 && value) {
    cart.push(...value);
  }

  function addToCart(id) {
    add(id);
    setValue(cart);
    console.log(cart);
  }

  function clearCart() {
    clear();
    setValue([]);
    console.log(cart);
  }

  return { addToCart, clearCart, cart };
}
