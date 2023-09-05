import express from "express";
import { createProduct, readProducts } from "./logic";
import { createProductValidation } from "./middlewares/createProductValidation";

const app = express();

app.use(express.json()); 

app.get("/", readProducts);

app.post("/", createProductValidation, createProduct);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})