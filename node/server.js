const express = require('express')
const os = require("os")
const app = express()
const port = 3000;

const INSTANCE = process.env.INSTANCE_NAME  || os.hostname();

app.get('/', (req, res) => {
  res.send(`Hello World! Running on instance: ${INSTANCE}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - ${INSTANCE}`)
})
