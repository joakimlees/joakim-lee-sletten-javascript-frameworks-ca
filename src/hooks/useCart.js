import { create } from "zustand";

export const useCartStore = create(set => ({
  cart: [],
  addProducts: product => set(state => ({ products: [{ id: product.id, title: product.title, price: product.price, imageUrl: product.imageUrl }, ...state.products] })),
  clearProducts: () => set({ products: [] }),
  useAddToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title, price: item.price, imageUrl: item.imageUrl }, ...state.cart] }));
  },
}));

export function useCart() {
  const addProduct = useCartStore(state => state.useAddToCart);
  const clearProduct = useCartStore(state => state.clearProducts);
  const cart = useCartStore(state => state.cart);

  function addToCart(id) {
    addProduct(id);

    console.log(cart);
  }

  function clearCart() {
    clearProduct();
    console.log(cart);
  }

  return { addToCart, clearCart };
}
