export const weakMap = new WeakMap();
let counter = 1;
export function queryAPI(endpoint) {
  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, counter++);
}
