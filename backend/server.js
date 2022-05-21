var express = require("express");
var db = require("./database.js");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())

var cors = require('cors');
app.use(cors({
  origin: "*"
}))

// Start server
var HTTP_PORT = 8080;

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//HTTP GET method
app.get("/api/products", (req, res, next) => {
  try{
    let sql = 'select * from products';
    let params = [];

    db.all(sql, params, (err, rows) => {
      if(err){
        res.status(400).json({error: err.message});
        return;
      }

      res.status(200).json({
        message: "success",
        data: rows,
      })
    })

  } catch(e){
    res.status(400).send(e)
  }
  
});

//HTTP POST method
app.post("/api/products", (req, res, next) => {
  const {
    productName,
    description,
    unitPrice,
  } = req.body

  var sql = "INSERT INTO products (productName, description, unitPrice) VALUES (?,?,?)";
  var params = [productName, description, unitPrice];

  try {

    db.run(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.status(200).json({
        message: "success",
        data: req.body,
      })
    })

  } catch (e) {
    es.status(400).send(e)
  }

});
