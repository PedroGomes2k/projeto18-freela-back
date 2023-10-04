import  db  from "../database/db.connection.js"


export async function verifyUsers(req, res, next) {

    const { email } = req.body

    try {

        const verifyUser = await db.query(`SELECT * FROM users WHERE email = $1;`, [email])

        console.log(verifyUser)
        if (verifyUser.rowCount !== 0) return res.status(409).send({ message: "Este email já é ultilizado por outro usuario" })
        
        next()

    } catch (err) {
        return res.status(500).send(err.message)
    }

}