const express = require('express')
const app = express()
const host = "http://127.0.0.1"
const port = 3000


// creo un basic project che ritorna un h1
app.get('/', (req, res) => {
    const markup = `
    <h1> Benvenuto nel mio blog!</h1>
    `
    res.send(markup)
})

app.listen(port, () => {
    console.log(`Example app listening on  ${host}:${port}`)
})

