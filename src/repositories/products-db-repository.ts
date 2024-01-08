import {productCollection} from "./db";

export type ProductsType = {
    id: number,
    title: string
}

export const productsRepository = {
    async getProductByTitle(title: string | undefined): Promise<ProductsType[]> {
        const filter: any = {}

        if (title) {
            filter.title = {$regex: title}
        }

        return productCollection.find(filter).toArray()
    },
    async getProductById(productId: number): Promise<ProductsType | null> {
        const product = await productCollection.findOne({id: productId})

        if (product) {
            return product
        } else {
            return null
        }
    },
    async createProduct(title: string): Promise<ProductsType> {
        const newProduct = {
            id: +(new Date()),
            title
        }
        const result = await productCollection.insertOne(newProduct)

        return newProduct
    },
    async updateProduct(productId: number, title: string): Promise<boolean> {
        const result = await productCollection.updateOne({id: productId}, {$set: {title}})

        return result.matchedCount === 1
    },
    async deleteProduct(productId: number): Promise<boolean> {
        const result = await productCollection.deleteOne({id: productId})

        return result.deletedCount === 1
    }
}