import db from "../database/db.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"


export async function createUsers(req, res) {

    const { name, email, password, city, phone } = req.body
  

    try {
        if (password.length < 3) return res.status(422).send("A senha tem que ter mais charcteres")

        const hash = bcrypt.hashSync(password, 10)

        await db.query(`

            INSERT INTO users (name, email, password, city, phone)
            VALUES ($1, $2, $3, $4, $5);`
            , [name, email, hash, city, phone]
        )

        res.sendStatus(201)


    } catch (err) {
        return res.status(500).send(err.message)
    }
}