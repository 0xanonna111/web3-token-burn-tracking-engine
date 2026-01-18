export const HISTORY = [];

export function logBurn(entry) {
  HISTORY.push({ time: Date.now(), entry });
}
