import { Router } from "express";
import { getMyServices, getServices, postService, updateService } from "../controllers/user.controller.js";
import validateSchemas from "../middlewares/validate.middlewares.js";
import { serviceSchema } from "../schemas/servicesSchema.js";
import { validateAuth } from "../middlewares/validateAuth.middlewares.js";


const routerUser = Router()

routerUser.get("/home", getServices)
routerUser.get("/services", validateAuth, getMyServices)
routerUser.post("/services/new-service", validateSchemas(serviceSchema), validateAuth, postService)
routerUser.put("/services/update-service", validateSchemas(serviceSchema), validateAuth, updateService)

export default routerUser