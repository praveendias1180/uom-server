var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = 'db-customer.sqlite'

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err){
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the sqlite db.')
        db.run(`CREATE TABLE IF NOT EXISTS customer (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            address text, 
            email text, 
            dateOfBirth text, 
            gender text, 
            age INTEGER, 
            cardHolderName text, 
            cardNumber INTEGER, 
            expiryDate text, 
            cvv INTEGER,
            timestamp text
        )`, (err) => {
            if(err){
                console.log(err)
            } else {
                // Table just creted
                var insert = 'INSERT INTO customer (name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expiryDate, cvv, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                db.run(insert, ["Praveen Dias", "Sapugaskanda", "praveen@uom.lk", "1986-11-11", "male", 35 , "Praveen Dias", 123456789012345, "2023-11-11", 2323, 12345678], (err) => {
                    if(err) console.log(err.message)
                })
            }
        })
        return db;
    }
})

module.exports = db