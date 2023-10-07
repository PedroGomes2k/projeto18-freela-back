import { Router } from "express";
import { getServices } from "../controllers/user.controller.js";


const routerUser = Router()

routerUser.get("/home", getServices)

export default routerUser