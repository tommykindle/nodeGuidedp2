const express = require('express')
const productsRouter = require('./products/products-router.js')
const productsRouter = require('./products/suppliers/suppliers-router.js')
const server = express();

function upperCaser(req, res, next) {
  const name = req.params.name;
  if (name) {
    name = name.toUpperCase()
  }
  res.send(`the name is: ${name}`)
}

server.use(express.json())


server.use('/products', productsRouter)
server.use('/suppliers', upperCaser, suppliersRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' })
})
module.exports = server;