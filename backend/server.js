var express = require("express");
var db = require("./database.js");
var app = express();

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

});
