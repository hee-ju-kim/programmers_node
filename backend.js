const fs = require('fs')
fs.readdir('./practice', (err, dir) => {
  if (err) {
    console.log(err)
  } else {
    require(`./practice/${dir[dir.length - 2]}/run.js`)
  }
})