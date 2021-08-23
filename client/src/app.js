import React from 'react'
import Navbar from './navbar'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}