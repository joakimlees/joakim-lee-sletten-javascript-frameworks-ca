import { create } from "zustand";

export const useCartStore = create(set => ({
  cart: [],
  addToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title, price: item.price, imageUrl: item.imageUrl }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);

  function addToCart(id) {
    add(id);

    console.log(cart);
  }

  function clearCart() {
    clear();
    console.log(cart);
  }

  return { addToCart, clearCart };
}
