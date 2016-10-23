import { h, Component } from 'preact'
import { route } from 'preact-router'

class About extends Component {

  handleClick() {
    route(`/?q=myquerystring`)
  }

  render() {
    return (
      <main>
        <p>About Page</p>
        <ul>
          <li><a href='/'>Home</a></li>
          <li onClick={() => { this.handleClick() }}>Click to use router push</li>
          <li><a href='/contact.html'>Contact</a></li>
        </ul>
      </main>
    )
  }
}

export default About
