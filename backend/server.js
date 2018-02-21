const express = require('express')
      app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/cart', (req, res) => {
  console.log('cart test')
})

app.post('/store', (req, res) => {
  console.log('add test')
})

app.listen(6060, () => {
  console.log('Listening on 6060')
})