export const fetchProducts = () => {
  return fetch('/api/products').then(response => response.json())
}
