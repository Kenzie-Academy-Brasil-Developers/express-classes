import { Router } from "express";
import { readProducts, createProduct } from "../logic";
import { createProductValidation } from "../middlewares/createProductValidation";

export const productRouter = Router();

productRouter.get("/", readProducts);
productRouter.post("/", createProductValidation, createProduct);