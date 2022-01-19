const express =  require('express');

const app = express();
const { resolve } = require('path');

app.use('/', 
  express.static(
    resolve(
      __dirname,
      './index.html'
    )
  )
)

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('tudo funcionando cetinho');
})