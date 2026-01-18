export function trackSupply(token, burnResult) {
  return {
    symbol: burnResult.symbol,
    currentSupply: burnResult.remainingSupply
  };
}
