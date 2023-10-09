import db from "../database/db.connection.js";

export function createService(userId, nameService, photo, description, price) {

    return db.query(`  
        INSERT INTO services ( "userId" ,"nameService", photo, description, price)
        VALUES($1, $2, $3, $4,$5);`,
        [userId, nameService, photo, description, price]
    )

}

export function findUserId(userId) {
    return (
        db.query(`
        SELECT services.id,
        services."nameService", 
        services.photo, services.price,
        services.description,
        services."userId" FROM services 
        WHERE "userId" = $1;`, [userId])
    )
}
export function findUser(userId) {
    return (
        db.query(`SELECT users.phone, users.name FROM users WHERE id = $1;`, [userId])
    )
}

export function updateCard(nameService, photo, description, price, id) {
    return (
        db.query(`UPDATE services SET  "nameService" = $1, photo = $2, description = $3, price = $4 WHERE id = $5;`, [nameService, photo, description, price, id])
    )
}

