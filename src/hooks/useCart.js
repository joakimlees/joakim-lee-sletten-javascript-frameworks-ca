import { useEffect } from "react";
import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

export const useCartStore = create(set => ({
  cart: [],

  getLocalStorage: value => {
    const newCart = localStorage.getItem(value);

    set(state => {
      state.cart = [{ newCart }];
      console.log(state.cart);
    });
  },

  addToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);

  const [value, setValue] = useLocalStorage();

  useEffect(function buttons() {
    function addToCart(id) {
      console.log(typeof cart);
      setValue(cart);
      add(id);

      console.log(cart);
    }

    function clearCart() {
      clear();
      console.log(cart);
    }
    return [addToCart, clearCart];
  });

  const [addToCart, clearCart] = buttons();

  return { addToCart, clearCart };
}
