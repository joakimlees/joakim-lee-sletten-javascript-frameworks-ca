import { calculateTotalPrice } from "./calculateTotalPrice";

export function getTotalPrice(array) {
  const newArray = array.map(product => {
    const discountedPrice = product.discountedPrice;
    const price = product.price;
    const count = product.count;

    if (discountedPrice < price) {
      const total = calculateTotalPrice(discountedPrice, count);
      return total;
    } else {
      const total = calculateTotalPrice(price, count);
      return total;
    }
  });

  const totalPrice = newArray.reduce((total, values) => {
    total += values;

    return total;
  }, 0);

  return totalPrice.toFixed(2);
}
