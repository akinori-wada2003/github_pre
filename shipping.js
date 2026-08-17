function shipProducts(demand, currentInventory) {
  const shippedQuantity = Math.min(demand, currentInventory);

  const remainingInventory =
    currentInventory - shippedQuantity;

  const lostSales =
    Math.max(0, demand - currentInventory);

  return {
    shippedQuantity,
    remainingInventory,
    lostSales
  };
}

module.exports = { shipProducts };