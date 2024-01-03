// repository - это data access layer, ниже чем наш роутер

const products = [
    {id: 1, title: 'banana'},
    {id: 2, title: 'apple'},
    {id: 3, title: 'orange'},
    {id: 4, title: 'milk'},
    {id: 5, title: 'bread'},
];

export const productsRepository = {
    getProductByTitle(title: string | undefined) {
        if (title) {
            return products.filter(p => p.title.toLowerCase().indexOf(title) > -1)
        } else {
            return products
        }
    },
    getProductById(productId: number) {
        return products.find(p => p.id === productId)
    },
    createProduct(title: string) {
        const newProduct = {
            id: +(new Date()),
            title
        }
        products.push(newProduct)
        return products
    },
    updateProduct(productId: number, title: string) {
        const product = products.find(p => p.id === productId)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }
    },
    deleteProduct(productId: number) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    }
}