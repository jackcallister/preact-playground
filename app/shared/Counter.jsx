import { h, Component } from 'preact'
import { connect } from 'mobx-preact'

class Counter extends Component {

  render() {
    const { store: { count, increment } } = this.props

    return (
      <div>
        <p>{count}</p>
        <button onClick={() => { increment() }}>Increment</button>
      </div>
    )
  }
}

export default connect(['store'], Counter)
