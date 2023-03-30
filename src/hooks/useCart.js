import { create } from "zustand";

export const useCartStore = create(set => ({
  products: [],
  addProducts: product => set(state => ({ products: [{ id: product.id, title: product.title, price: product.price, imageUrl: product.imageUrl }, ...state.products] })),

  /*
  products: [{}],
  addProducts: product => set(state => ({ products: [{ id: product.id }, ...state.products] })),
*/
  /*
  products: [],
  addProducts: id => set(state => ({ products: [...state.products, id] })),*/
  clearProducts: () => set({ products: [] }),
}));

export function useCart() {
  const addProduct = useCartStore(state => state.addProducts);
  const clearProduct = useCartStore(state => state.clearProducts);
  const products = useCartStore(state => state.products);

  function addToCart(id) {
    addProduct(id);

    console.log(products);
  }

  function clearCart() {
    clearProduct();
    console.log(products);
  }

  function setProducts() {
    console.log("set products");
  }

  return { addToCart, clearCart, setProducts };
}
