export default class Cart {
    constructor({ products }) {
        this.products = products;
        this.total = this.getCartPrice();
    }
    
    getCartPrice() {
        return this.products.map(p => p.price).reduce((acc, current) => acc + current, 0);
    }
}