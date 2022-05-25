var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = 'db.sqlite'

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err){
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the sqlite db.')
        db.run(`CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productName text,
            description text,
            category text,
            brand text,
            expiredDate text,
            manufacturedDate text,
            batchNumber INTEGER,
            unitPrice INTEGER,
            quantity INTEGER,
            createdDate text
        )`, (err) => {
            if(err){
                console.log(err)
            } else {
                // Table just creted
                var insert = 'INSERT INTO products (productName, description, category, brand, expiredDate, manufacturedDate, batchNumber, unitPrice, quantity, createdDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                db.run(insert, ["White Basmathi Rice", "White Basmathi Imported", "Rice", "Araliya", "2022-12-31", "2022-01-01", 222, 450, 50, "2022-05-05"], (err) => {
                    if(err) console.log(err.message)
                })
            }
        })
        return db;
    }
})

module.exports = db