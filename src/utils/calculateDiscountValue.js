export function calculateDiscountValue(oldPrice, newPrice) {
  const calculated = ((newPrice - oldPrice) / oldPrice) * 100;
  const discount = Math.trunc(calculated);
  return discount;
}
