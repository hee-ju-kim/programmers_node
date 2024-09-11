const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!23</h1>')
})

app.listen(3000, () => {
  console.log('pm2 서버 시작')
})
