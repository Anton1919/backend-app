import { Router } from 'express';
import { Request, Response } from 'express';
import { productsService } from '../domain/products-service';

export const productsRouter = Router({});

productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts = await productsService.getProductByTitle(req.query.title?.toString());
    res.send(foundProducts);
});

productsRouter.get('/:id', async (req: Request, res: Response) => {
    const product = await productsService.getProductById(+req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.send(404);
    }
});

// DELETE product
productsRouter.delete('/:id', async (req: Request, res: Response) => {
    const isDeleted = await productsService.deleteProduct(+req.params.id);
    if (isDeleted) {
        res.send(204);
    } else {
        res.send(404);
    }
});

// POST product
productsRouter.post('/', async (req: Request, res: Response) => {
    const newProduct = await productsService.createProduct(req.body.title);
    res.status(201).send(newProduct);
});

// PUT product
productsRouter.put('/:id', async (req: Request, res: Response) => {
    const isUpdated = await productsService.updateProduct(+req.params.id, req.body.title);

    if (isUpdated) {
        const product = await productsService.getProductById(+req.params.id);
        res.send(product);
    } else {
        res.send(404);
    }
});
