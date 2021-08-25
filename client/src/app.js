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
        <div className="bodyWrapper">
          <div className="parallax">
            <div className="content">
            lots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of wordslots of words
            </div>
          </div>
          <div className="regular" style={{height: '1000px', backgroundColor: 'red', width: '100%'}}></div>
        </div>
      </div>
    )
  }
}