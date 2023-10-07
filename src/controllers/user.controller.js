import db from "../database/db.connection.js"

export async function getServices(req, res) {

    try {
        const services = await db.query("SELECT * FROM services")
        res.status(201).send(services.rows)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}