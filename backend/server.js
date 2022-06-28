const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the app'})
})

app.listen(3000, () => {
  console.log(`Listening on PORT ${3000}`)
})