const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3030
const cors = require('cors');

const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors());

// We’ll tell a route to look for a GET request on the root / URL and return some JSON:
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/saved', db.getSaved)
app.delete('/saved/:id', db.removeSaved)

// Now, set the app to listen on the port you set:
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})