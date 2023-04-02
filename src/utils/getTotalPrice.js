import { calculateTotalPrice } from "./calculateTotalPrice";

//takes an array.
//maps the array
//pics the "current price value which is either discounted price or regular price - depending on if the discounted price is less then the regular/if the product is discounted.
//combine all the prices to return a total price/combined price.
//which is returned with only 2 decimals.
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
