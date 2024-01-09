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
exports.productsService = void 0;
const products_db_repository_1 = require("../repositories/products-db-repository");
exports.productsService = {
    getProductByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_db_repository_1.productsRepository.getProductByTitle(title);
        });
    },
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_db_repository_1.productsRepository.getProductById(productId);
        });
    },
    createProduct(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = {
                id: +new Date(),
                title,
            };
            return yield products_db_repository_1.productsRepository.createProduct(newProduct);
        });
    },
    updateProduct(productId, title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_db_repository_1.productsRepository.updateProduct(productId, title);
        });
    },
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield products_db_repository_1.productsRepository.deleteProduct(productId);
        });
    },
};
