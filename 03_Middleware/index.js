const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded()

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  //if (!req.body || !req.body.username) res.sendStatus(400)
  res.send('welcome, ' + (JSON.stringify( req.body)))
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) res.sendStatus(400)
  // create user in req.body
})


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});
