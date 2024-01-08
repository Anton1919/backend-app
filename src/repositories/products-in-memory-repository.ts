export type ProductsType = {
    id: number,
    title: string
}

const products: ProductsType[] = [
    {id: 1, title: 'banana'},
    {id: 2, title: 'apple'},
    {id: 3, title: 'orange'},
    {id: 4, title: 'milk'},
    {id: 5, title: 'bread'},
];

export const productsRepository = {
    async getProductByTitle(title: string | undefined): Promise<ProductsType[]> {
        if (title) {
            return products.filter(p => p.title.toLowerCase().indexOf(title) > -1)
        } else {
            return products
        }
    },
    async getProductById(productId: number): Promise<ProductsType | undefined> {
        return products.find(p => p.id === productId)
    },
    async createProduct(title: string): Promise<ProductsType[]> {
        const newProduct = {
            id: +(new Date()),
            title
        }
        products.push(newProduct)
        return products
    },
    async updateProduct(productId: number, title: string): Promise<boolean> {
        const product = products.find(p => p.id === productId)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }
    },
    async deleteProduct(productId: number): Promise<boolean> {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    }
}