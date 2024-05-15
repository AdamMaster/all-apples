export const fetchProducts = {
  url: '../../app/products.json',

  async getAll() {
    return fetch(this.url); 
  }
}