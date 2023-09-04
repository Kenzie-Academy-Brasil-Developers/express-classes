import express from "express";
import { createProduct, readProducts } from "./logic";

const app = express();

app.use(express.json()); 

app.get("/", readProducts);

app.post("/", createProduct);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})