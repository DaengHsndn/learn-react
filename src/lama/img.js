import React, { Component } from 'react'

var sectionStyle = {
   backgroundImage: `url(${LogoImage})`
}

 class App extends Component {
  render() {
    return (

      <div style={sectionStyle}>

      <div>
        <Navbar/>
      </div>


      </div>
    )
  }
}