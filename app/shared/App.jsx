import { h, Component } from 'preact'
import { Provider } from 'mobx-preact'
import Counter from './Counter'
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

export default App
