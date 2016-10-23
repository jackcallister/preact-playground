import express from 'express'
import path from 'path'
import render from 'preact-render-to-string'
import { h } from 'preact'
import App from '../shared/App'

const app  = express()
const port = process.env.PORT || 7777

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './'))
app.use('/public', express.static(path.join(__dirname, '../../public')))

app.get('/', (req, res, next) => {
  res.render('index', { app: render(<App/>) })
})

app.listen(port, () => {
  console.log('listening on *:' + port)
})
