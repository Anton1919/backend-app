"use strict";
// repository - это data access layer, ниже чем наш роутер
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const products = [
    { id: 1, title: 'banana' },
    { id: 2, title: 'apple' },
    { id: 3, title: 'orange' },
    { id: 4, title: 'milk' },
    { id: 5, title: 'bread' },
];
exports.productsRepository = {
    getProductByTitle(title) {
        if (title) {
            return products.filter(p => p.title.toLowerCase().indexOf(title) > -1);
        }
        else {
            return products;
        }
    },
    getProductById(productId) {
        return products.find(p => p.id === productId);
    },
    createProduct(title) {
        const newProduct = {
            id: +(new Date()),
            title
        };
        products.push(newProduct);
        return products;
    },
    updateProduct(productId, title) {
        const product = products.find(p => p.id === productId);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(productId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
