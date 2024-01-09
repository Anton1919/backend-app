import { productsRepository, ProductsType } from '../repositories/products-db-repository';

export const productsService = {
    async getProductByTitle(title: string | undefined): Promise<ProductsType[]> {
        return await productsRepository.getProductByTitle(title);
    },

    async getProductById(productId: number): Promise<ProductsType | null> {
        return await productsRepository.getProductById(productId);
    },

    async createProduct(title: string): Promise<ProductsType> {
        const newProduct = {
            id: +new Date(),
            title,
        };

        return await productsRepository.createProduct(newProduct);
    },

    async updateProduct(productId: number, title: string): Promise<boolean> {
        return await productsRepository.updateProduct(productId, title);
    },

    async deleteProduct(productId: number): Promise<boolean> {
        return await productsRepository.deleteProduct(productId);
    },
};
