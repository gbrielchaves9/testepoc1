import express, { Request, Response ,json} from "express";
import httpStatus from "http-status";
import foodRouter from "./router/food-router";

const app = express();

app.get("/health", (req: Request, res: Response) => res.sendStatus(httpStatus.OK));
app.use(json());
app.use(foodRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server on ${port}`));
