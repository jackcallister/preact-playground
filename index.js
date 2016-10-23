import { h, render, Component } from 'preact'
import { observable } from 'mobx'
import { Provider } from 'mobx-preact'
import Router from 'preact-router'
import Increment from './Increment'
import Counter from './Counter'
import Home from './Home'
import About from './About'

const store = observable({
  count: 1,
})

store.increment = () => {
 store.count += 1
}

// Async
setTimeout(() => {
  store.count = 10
}, 5000)

const Main = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app')
  )
})
