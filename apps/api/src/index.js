const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.all('*', (req, res) => {
  res.send('Hello API World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})