import React from 'react'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'buttons': ['Homepage', 'About Us', 'Services', 'Contact', 'External']
    }
  }

  render() {
    return (
      <div className='navbar'>
        {this.state.buttons.map(link => {
          return(
            <div className='buttonContainer'>
              <a className='navButton'>
                {link}
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}