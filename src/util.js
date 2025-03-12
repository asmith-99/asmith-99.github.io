export function cx(...rest) {
  return rest.filter((arg) => typeof arg === "string").join(" ");
}
