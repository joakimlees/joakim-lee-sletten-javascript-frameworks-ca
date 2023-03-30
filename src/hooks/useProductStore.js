import { create } from "zustand";

export const useProductStore = create(set => ({
  products: [],
  product: [],
  isLoading: false,
  hasError: false,
  fetchProduct: async url => {
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(url);
      const data = await response.json();
      set(state => ({ product: (state.product = data), isLoading: false }));
    } catch (error) {
      set(() => ({ hasError: true, isLoading: false }));
    }
  },
  fetchProducts: async url => {
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(url);
      const data = await response.json();
      set(state => ({ products: (state.products = data), isLoading: false }));
    } catch (error) {
      set(() => ({ hasError: true, isLoading: false }));
    }
  },
}));

export function useProducts() {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  const fetchProduct = useProductStore(state => state.fetchProduct);
  const products = useProductStore(state => state.products);
  const product = useProductStore(state => state.product);
  const isLoading = useProductStore(state => state.isLoading);
  const hasError = useProductStore(state => state.hasError);

  return { fetchProducts, fetchProduct, product, products, isLoading, hasError };
}
