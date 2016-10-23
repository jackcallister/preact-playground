import express from 'express'
import path from 'path'

const app  = express()
const port = process.env.PORT || 7777

app.use('/public', express.static(path.join(__dirname, '../../public')))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => {
  console.log('listening on *:' + port)
})
