"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            if (title) {
                return products.filter(p => p.title.toLowerCase().indexOf(title) > -1);
            }
            else {
                return products;
            }
        });
    },
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return products.find(p => p.id === productId);
        });
    },
    createProduct(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = {
                id: +(new Date()),
                title
            };
            products.push(newProduct);
            return products;
        });
    },
    updateProduct(productId, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = products.find(p => p.id === productId);
            if (product) {
                product.title = title;
                return true;
            }
            else {
                return false;
            }
        });
    },
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === productId) {
                    products.splice(i, 1);
                    return true;
                }
            }
            return false;
        });
    }
};
