export function generateReport(burn, supply) {
  console.log("----- Burn Report -----");
  console.log("Token:", burn.symbol);
  console.log("Burned:", burn.burned);
  console.log("Remaining Supply:", supply.currentSupply);
  console.log("------------------------");
}
