var express = require('express')
var app = express()
var db = require('./customer-database')
console.log(db)
var bodyParser = require('body-parser')
app.use(bodyParser.json())

let HTTP_PORT = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/products', (req, res, next) => {
    var sql = "SELECT * FROM products"
    var params = []
    db.all(sql, params, (err, rows) => {
        if(err){
            console.log(err.message)
            res.status(400).json({"error": err.message})
            return
        } else {
            res.json({
                "message": "success",
                "data": rows,
                "id": this.lastID // this.changes if it is a delete
            })

        }

    })
})

app.post('/api/customers', (req, res) => {
    try{
        var errors = []

        if(!req.body){
            errors.push("An invalid input")
        }

        const {
            name, 
            address, 
            email, 
            dateOfBirth, 
            gender, 
            age, 
            cardHolderName, 
            cardNumber, 
            expiryDate, 
            cvv,
            timestamp
        } = req.body

        var sql = 'INSERT INTO customer (name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expiryDate, cvv, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        var params = [name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expiryDate, cvv, timestamp]
        console.log(db)
        db.run(sql, params, function(err, result){
            if(err){
                console.log(err.message)
                res.status(400).json({"error": err.message})
                return
            } else {
                res.status(201).json({
                    "message": "success",
                    "data": result,
                    "id": this.lastID
                })

            }
        })

    } catch (e){
        console.log(e.message)
        res.status(400).json({"error": e.message})
    }
})

app.listen(HTTP_PORT, () => console.log('Server is running on %PORT%'.replace('%PORT%', HTTP_PORT)))
