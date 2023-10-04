import { Router } from "express";
import validateSchemas from "../middlewares/validate.middlewares.js";
import { signUpShecma } from "../schemas/signSchema.js";
import { verifyUsers } from "../middlewares/users.middlewares.js";
import { createUsers } from "../controllers/user.controller.js";


const routerUser = Router()

routerUser.post("/cadastro", validateSchemas(signUpShecma), verifyUsers, createUsers)


export default routerUser