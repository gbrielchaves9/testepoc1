import { Request,Response } from "express";
import * as foodService from "./../services/food-service";
import { ValidId } from "../utils/valid-id";
import httpStatus from "http-status";

export async function getAll(req:Request , res:Response){
const food = await foodService.getAll();
res.send(food)
}
export async function getAllById(req:Request , res:Response){
    const id = parseInt(req.params.id)
    if(!ValidId(id)) return res.sendStatus(httpStatus.BAD_REQUEST)
}

export async function CreateNewFood(req:Request , res:Response){
    
}

export async function UpdateFood(req:Request , res:Response){
    const id = parseInt(req.params.id)
    if(!ValidId(id)) return res.sendStatus(httpStatus.BAD_REQUEST)
    
}

export async function DeleteFood(req:Request , res:Response){
    const id = parseInt(req.params.id)
    if(!ValidId(id)) return res.sendStatus(httpStatus.BAD_REQUEST)
}