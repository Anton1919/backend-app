import {Router} from "express";
import {Request, Response} from 'express';
import {productsRepository} from "../repositories/products-repository";

export const productsRouter = Router({});

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.getProductByTitle(req.query.title?.toString())
    res.send(foundProducts)
});

productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.getProductById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
});

// DELETE product
productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
});

// POST product
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
});

// PUT product
productsRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)

    if (isUpdated) {
        const product = productsRepository.getProductById(+req.params.id)
        res.send(product)
    } else {
        res.send(404)
    }
});