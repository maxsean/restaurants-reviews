import React from 'react'
import TextField from '../components/TextField.js'

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
  }
  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A search was made: ' + this.state.value)
    event.preventDefault()
    let formPayload = {
      value: this.state.value
    }
    this.props.makeNewSearch(formPayload)
  }


render() {
  return(
    <form onSubmit={this.handleSubmit}>
      <TextField
        value={this.state.value}
        handleInputChange={this.handleInputChange}
      />
    </form>
  )
}

}
export default FormContainer;
