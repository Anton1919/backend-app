import express from 'express'
import bodyParser from "body-parser"
import {runDb} from './repositories/db'
import {productsRouter} from "./routes/products-router";

const app = express()

const jsonBodyParser = bodyParser.json()

const PORT = process.env.PORT || 8000

// Middlewares
app.use(jsonBodyParser)

app.use('/products', productsRouter)

const startApp = async () => {
    await runDb()
    app.listen(PORT, () => {
        console.log(`Server is ready on port: ${PORT}`)
    })
}

startApp()

