// Storing items in local storage
export function storeItem(name, value) {
  return localStorage.setItem(name, JSON.stringify(value));
}

// Get item from local storage
export function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}
