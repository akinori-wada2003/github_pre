function decideInbound(forecastDemand, currentInventory, warehouseCapacity) {
  const targetInventory = forecastDemand;

  const requiredInbound = Math.max(
    0,
    targetInventory - currentInventory
  );

  const availableCapacity =
    warehouseCapacity - currentInventory;

  return Math.min(
    requiredInbound,
    availableCapacity
  );
}

module.exports = { decideInbound };