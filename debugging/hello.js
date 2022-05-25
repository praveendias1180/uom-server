const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    console.log('Hello console')
    return res.send("world")
})

app.listen(7000, () => console.log("Hello is listening on hello"))