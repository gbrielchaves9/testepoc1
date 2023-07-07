import { Router } from "express";
import * as foodControllers from "./../controllers/food-controllers";
import { validSchema } from "../middlewares/schema-middleres";
import foodSchema from "../schemas/food-schemas";
const foodRouter = Router();

foodRouter.get("/food", foodControllers.getAll);
foodRouter.get("/food/:id", foodControllers.getAllById);
foodRouter.post("/food", validSchema(foodSchema),foodControllers.CreateNewFood);
foodRouter.put("/food/:id", validSchema(foodSchema), foodControllers.UpdateFood);
foodRouter.delete("/food/:id", foodControllers.DeleteFood);

export default foodRouter;
