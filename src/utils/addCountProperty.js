export function addCountProperty(array) {
  // map current cart id's
  const mappedCartIds = array.map(products => {
    return products.id;
  });

  //get quantity and return array with count property
  const productInCartCount = mappedCartIds.reduce((counts, id) => {
    counts[id] = (counts[id] || 0) + 1;
    return counts;
  }, {});
  const cartWithCountProp = array.map(product => ({
    ...product,
    count: productInCartCount[product.id] || 0,
  }));

  //filter cart items, returning only the first object (first index), which have the same id as some other object.
  const newCart = cartWithCountProp.filter((items, index) => array.findIndex(item => item.id === items.id) === index);

  return newCart;
}
