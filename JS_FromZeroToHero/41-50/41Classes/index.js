class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const products = [product1, product2, product3];
const prices = products.map(obj => obj.price);
console.log((products.map(obj => obj.calculateTotal(salesTax)).reduce((acc, e) => acc + e)));