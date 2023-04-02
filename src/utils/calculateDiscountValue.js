//calculate the percented of discount from old price to new price.
//oldPrice = regular price.
//newPrice = discounted price (have to be less then oldPrice).
export function calculateDiscountValue(oldPrice, newPrice) {
  const calculated = ((newPrice - oldPrice) / oldPrice) * 100;
  const discount = Math.trunc(calculated);
  return discount;
}
