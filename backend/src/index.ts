import express from 'express'

const expressApp = express()

expressApp.get('/', (req, res) => {
  res.send('pong')
})

expressApp.listen(3000, () => {
  console.log('Example app  http://localhost:3000')
})
