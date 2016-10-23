import { h, Component } from 'preact'
import Counter from './Counter'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home page</h1>

        <Counter />
      </div>
    )
  }
}

export default Home
