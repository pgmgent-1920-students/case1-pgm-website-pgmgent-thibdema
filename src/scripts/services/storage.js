// Storing items in local storage
export const storeItem = (name, value) => {
  return localStorage.setItem(name, JSON.stringify(value));
}

// Get item from local storage
export const getItem = (name) => {
  return JSON.parse(localStorage.getItem(name));
}
