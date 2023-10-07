import { Router } from "express"
import routerAuth from "./auth.router.js"
import routerUser from "./user.router.js"

const router = Router()

router.use(routerAuth)
router.use(routerUser)

export default router