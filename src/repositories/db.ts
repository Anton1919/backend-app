import {MongoClient} from "mongodb";
import {ProductsType} from "./products-db-repository";

const mongoUrl = process.env.mongoURI || 'mongodb://localhost:27017';

const client = new MongoClient(mongoUrl);
const db = client.db("shop")
export const productCollection = db.collection<ProductsType>("products")


export async function runDb() {
    try {
        await client.connect()
        await client.db('products').command({ping: 1})
        console.log('Connected successfully to mongo server')
    } catch {
        await client.close()
        console.log("Can't connect to data base")
    }
}