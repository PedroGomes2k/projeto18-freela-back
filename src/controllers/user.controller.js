import db from "../database/db.connection.js"
import { createService, findUser, findUserId, updateCard } from "../repositories/user.repository.js"

export async function getServices(req, res) {

    const { userId } = res.locals

    try {
        const services = await db.query("SELECT * FROM services")
        
        res.status(201).send(services.rows)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

export async function postService(req, res) {

    const { nameService, photo, description, price } = req.body
    const { userId } = res.locals

    try {

        const newService = await createService(userId, nameService, photo, description, price)
        res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getMyServices(req, res) {

    const { userId } = res.locals

    try {
        const services = await findUserId(userId)
        
        res.status(201).send(services.rows)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

export async function updateService(req, res) {

    const { nameService, photo, description, price } = req.body
    const { id } = res.locals

    try {

        await updateCard(nameService, photo, description, price, id)

        res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

31 