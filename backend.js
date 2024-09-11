const express = require('express')
const moment = require('moment')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!23</h1>')
})

app.listen(3000, () => {
  const current = moment().format('YYYYMMDD')
  fs.readdir(`./${current}`, (err, dir) => {
    if (err) {
      console.log(err)
    } else {
      require(`./${current}/${dir[dir.length - 1]}/run.js`)
    }
  })
})
