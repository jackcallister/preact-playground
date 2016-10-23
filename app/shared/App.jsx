import { h, Component } from 'preact'
import Router from 'preact-router'
import { Provider } from 'mobx-preact'
import Home from './Home'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home path="/" />
        </Router>
      </Provider>
    )
  }
}

export default App
