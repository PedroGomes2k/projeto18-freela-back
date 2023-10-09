import { Router } from "express";
import validateSchemas from "../middlewares/validate.middlewares.js";
import { loginShecma, signUpShecma } from "../schemas/signSchema.js";
import { createUsers, loginUser } from "../controllers/auth.controller.js";


const routerAuth = Router()

routerAuth.post("/cadastro", validateSchemas(signUpShecma), createUsers)
routerAuth.post("/", validateSchemas(loginShecma), loginUser)


export default routerAuth