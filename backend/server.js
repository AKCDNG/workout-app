require('dotenv').config()
const express = require('express')
const routes = require('./routes/routes')

const app = express()


app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts', routes)

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`)
})

process.env