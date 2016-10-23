import { h, render, Component } from 'preact'
import App from '../shared/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app'),
    document.getElementById('app').lastElementChild
  )
})
