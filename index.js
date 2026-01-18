import { connectRPC } from "./rpc.client.js";
import { loadToken } from "./token.registry.js";
import { burnTokens } from "./burn.engine.js";
import { trackSupply } from "./supply.tracker.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Burn Tracking Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const token = loadToken();

const burnResult = burnTokens(token, 1000);
const supply = trackSupply(token, burnResult);

generateReport(burnResult, supply);
