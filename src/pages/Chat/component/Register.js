import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      displayName: '',
      password: '',
      profilePictureUrl: '',
      errorMessage: '',
    }
  }

  onUsernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  onDisplayNameChange = e => {
    this.setState({
      displayName: e.target.value
    })
  }

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  onProfilePictureUrlChange = e => {
    this.setState({
      profilePictureUrl: e.target.value
    })
  }

  onRegister = () => {
    axios.post('http://167.99.66.103/api/users', {
      username: this.state.username,
      displayName: this.state.displayName,
      profilePicUrl: this.state.profilePictureUrl,
      password: this.state.password,
    }).then(res => {
      this.setState({ errorMessage: res.data.message })
    })
  }

  render() {
    console.log(this.state.profilePictureUrl)
    return (
      <div className="form-wrapper">
        <label htmlFor="usernameId">Username</label>
        <input id="usernameId" type="text" value={this.state.username} onChange={this.onUsernameChange} />

        <label htmlFor="displaynameId">Display Name</label>
        <input id="displaynameId" type="text" value={this.state.displayName} onChange={this.onDisplayNameChange} />

        <label htmlFor="passwordId">Password</label>
        <input id="passwordId" type="password" value={this.state.password} onChange={this.onPasswordChange} />

        <label htmlFor="profilePictureUrlId">Profile Picture URL</label>
        <input id="profilePictureUrlId" type="text" value={this.state.profilePictureUrl} onChange={this.onProfilePictureUrlChange} />

        <button className="submit-button" onClick={this.onRegister}>Register Now</button>

        <div className="error-msg">{this.state.errorMessage}</div>
      </div>

    )
  }
}

export default Register