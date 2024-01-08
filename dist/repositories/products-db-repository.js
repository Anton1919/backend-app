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
const db_1 = require("./db");
exports.productsRepository = {
    getProductByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = {};
            if (title) {
                filter.title = { $regex: title };
            }
            return db_1.productCollection.find(filter).toArray();
        });
    },
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield db_1.productCollection.findOne({ id: productId });
            if (product) {
                return product;
            }
            else {
                return null;
            }
        });
    },
    createProduct(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = {
                id: +(new Date()),
                title
            };
            const result = yield db_1.productCollection.insertOne(newProduct);
            return newProduct;
        });
    },
    updateProduct(productId, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.productCollection.updateOne({ id: productId }, { $set: { title } });
            return result.matchedCount === 1;
        });
    },
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.productCollection.deleteOne({ id: productId });
            return result.deletedCount === 1;
        });
    }
};
