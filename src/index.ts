import express from 'express'
import bodyParser from "body-parser"
import {productsRouter} from "./routes/products-router";

const app = express()

const PORT = 8000

// Middlewares
app.use(bodyParser.json())

app.use('/products', productsRouter)

app.listen(PORT, () => console.log('Server is ready'))