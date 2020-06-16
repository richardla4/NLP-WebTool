const app = require('./index')
const port = 3000

app.listen(port, function () {
  console.log('server running')
  console.log(`running on localhost: ${port}`)
})
