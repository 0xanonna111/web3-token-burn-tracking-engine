export function burnTokens(token, amount) {
  console.log("Burning tokens:", amount, token.symbol);

  token.totalSupply -= amount;

  return {
    symbol: token.symbol,
    burned: amount,
    remainingSupply: token.totalSupply
  };
}
