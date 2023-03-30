import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export const useCartStore = create(set => ({
  cart: [],
  setCart: items => {
    set(state => ({ cart: localStorage.getItem("cart") }));
  },
  useAddToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title, price: item.price, imageUrl: item.imageUrl }, ...state.cart] }));

    localStorage.setItem("cart", JSON.stringify({ products: [{ ...item }] }));
  },
  clearProducts: () => set({ cart: [] }),
}));

export function useCart() {
  const addProduct = useCartStore(state => state.useAddToCart);
  const clearProduct = useCartStore(state => state.clearProducts);
  const cart = useCartStore(state => state.cart);
  const localCart = useCartStore(state => state.setCart);
  const [valueInLocalStorage, setValueInLocalStorage] = useLocalStorage();

  function addToCart(id) {
    addProduct(id);
    localCart(valueInLocalStorage);
    //setValueInLocalStorage(cart);

    console.log(cart);
  }

  function clearCart() {
    clearProduct();
    console.log(cart);
  }

  return { addToCart, clearCart };
}
