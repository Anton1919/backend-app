"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8000;
const products = [
    { id: 1, title: 'banana' },
    { id: 2, title: 'apple' },
    { id: 3, title: 'orange' },
    { id: 4, title: 'milk' },
    { id: 5, title: 'bread' },
];
// query parameter
app.get('/products', (req, res) => {
    if (req.query.title) {
        const searchString = req.query.title.toString().toLowerCase();
        res.send(products.filter(p => p.title.toLowerCase().indexOf(searchString) > -1));
    }
    else {
        res.send(products);
    }
});
// URI parameter
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
// DELETE product
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
// POST product
app.post('/products', (req, res) => {
});
app.listen(PORT, () => console.log('Server is ready'));
