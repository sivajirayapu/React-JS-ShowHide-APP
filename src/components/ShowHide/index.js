// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHide: false, isLastNameHide: false}

  clickFirstName = () => {
    this.setState(prevState => ({isFirstNameHide: !prevState.isFirstNameHide}))
  }

  clickLastName = () => {
    this.setState(prevState => ({isLastNameHide: !prevState.isLastNameHide}))
  }

  render() {
    const {isFirstNameHide, isLastNameHide} = this.state
    const firstName = isFirstNameHide ? (
      <div className="name-card">
        <p className="name-heading">Joe</p>
      </div>
    ) : null

    const lastName = isLastNameHide ? (
      <div className="name-card">
        <p className="name-heading">Jonas</p>
      </div>
    ) : null

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="container">
            <button
              type="button"
              className="button"
              onClick={this.clickFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName}
          </div>
          <div className="container">
            <button
              type="button"
              className="button"
              onClick={this.clickLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
