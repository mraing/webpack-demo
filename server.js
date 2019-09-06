// express 是 node 的框架，实现服务端的一些功能

const express = require('express')

const app = express()

app.get('/home',(req, res) => {
  res.json({
    name: 'My name is Mr.Lee - 10',
    age: '24'
  })
})

app.listen(3000)