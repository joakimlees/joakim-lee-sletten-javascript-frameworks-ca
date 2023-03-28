import { create } from "zustand";

export const useCartStore = create(set => ({
  products: [],
  addProducts: title => set(state => ({ products: [...state.products, title] })),
  clearProducts: () => set({ products: [] }),
}));

export function useCart() {
  const addProduct = useCartStore(state => state.addProducts);
  const clearProduct = useCartStore(state => state.clearProducts);
  const products = useCartStore(state => state.products);

  function addToCart(title) {
    addProduct(title);
    console.log(products);
  }

  function clearCart() {
    console.log("clear cart");
    clearProduct();
  }

  function setProducts() {
    console.log("set products");
  }

  return { addToCart, clearCart, setProducts };
}
