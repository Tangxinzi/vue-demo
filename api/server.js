const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use(bodyParser.json())

let count = [1, 2, 3]

router.route('/count')
  .get((request, response) => {
    response.send({
      count
    })
  })
  .post((request, response) => {
    count.push(Number(request.body.number))
    response.status(201).send({
      message: 'ok'
    })
  })
  .delete((request, response) => {
    count.pop()
    response.status(200).send({
      message: 'ok'
    })
  })

app.use('/api', router)

app.listen(8080, () => {
  console.log('http://localhost:8080');
})
