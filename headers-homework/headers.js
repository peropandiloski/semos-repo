const express = require('express')
const app = express()
const port = 3030


app.get('/connection', (req, res) => {
  res.send(req.header('user-agent'))
})

app.get('/raw', (req, res) => {
  res.send(req.rawHeaders)
})

app.get('/host', (req, res) => {
  res.send(req.header('host'))
})

app.post('/posts', (req, res) => {
  res.send(req.header('user-agent'))
})

app.put('/puts', (req, res) => {
  res.send(req.rawHeaders)
})

app.patch('/patchs', (req, res) => {
  res.send(req.header('accept'))
})

app.listen(port, () => {
  console.log(`server starting at http://localhost:${port}`)
})