import express, { Request, Response } from "express";

const app = express();

app.use(express.json()); 

app.get("/", (req: Request, res: Response) => {
    return res.send('Hello world!');
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.headers);
    console.log(req.body);
    return res.status(201).json({ message: 'Created successfully.'});
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})