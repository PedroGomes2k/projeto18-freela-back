import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { createSessionDB, createUsersDB, verifyEmail } from "../repositories/auth.repository.js"


export async function createUsers(req, res) {

    const { name, email, password, city, phone } = req.body

    try {

        const user = await verifyEmail(email)
        if (password.length < 3) return res.status(422).send("A senha tem que ter mais charcteres")
        if (user.rowCount !== 0) return res.status(409).send({ message: "Este email já é ultilizado por outro usuario!" })

        const hash = bcrypt.hashSync(password, 10)

        await createUsersDB(name, email, hash, city, phone)

        res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function loginUser(req, res) {

    const { email, password } = req.body

    try {

        const user = await verifyEmail(email)
        if (user.rowCount === 0) return res.status(409).send({ message: "Este email não exste!" })

        const verifyPassword = bcrypt.compareSync(password, user.rows[0].password)
        if (!verifyPassword) return res.status(409).send({ message: "Senha incorreta!" })

        const token = uuid()
        await createSessionDB(user.rows[0].id, token)

        res.send({token})

    } catch (err) {
        return res.status(500).send(err.message)
    }

}