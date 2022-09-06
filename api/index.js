const express = require('express')
const app = express()
const port = 9002

app.get('/', (req, res) => {
    res.send('Bye world!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})