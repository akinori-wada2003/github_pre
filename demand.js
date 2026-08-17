function forecastDemand(history) {
  const sum = history.reduce((total, value) => total + value, 0);
  const average = sum / history.length;

  return Math.round(average);
}

module.exports = { forecastDemand };