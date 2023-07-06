import { Router } from "express";
import * as foodControllers from "./../controllers/food-controllers";

const foodRouter = Router();

foodRouter.get("/food", foodControllers.getAll);
foodRouter.get("/food/:id", foodControllers.getAllById);
foodRouter.post("/food", foodControllers.CreateNewFood);
foodRouter.put("/food/:id", foodControllers.UpdateFood);
foodRouter.delete("/food/:id", foodControllers.DeleteFood);

export default foodRouter;
