import { Request, Response } from "express";
import { productList } from "./database";

export const readProducts = (req: Request, res: Response) => {
    return res.status(200).json(productList);
}

export const createProduct = (req: Request, res: Response) => {
   const id = Math.random();
   const newProduct = { id, ...req.body };
   productList.push(newProduct);
   return res.status(201).json({ message: "Created successfully.", product: newProduct });
};
