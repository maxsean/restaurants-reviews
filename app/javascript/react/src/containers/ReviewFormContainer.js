import React from 'react'
import TextInputField from '../components/TextInputField'
import TextAreaField from '../components/TextAreaField'
import RadioButtonField from '../components/RadioButtonField'

class ReviewFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason_of_visit: "",
      quality_of_service: null,
      noise_level: null,
      fits_taste: false,
      lighting: null,
      cleanliness: null,
      comment: "",
      review: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    debugger;
    this.setState({ review: formPayLoad })
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state.reason_of_visit)
    console.log(this.state.comment)
    return(
      <div className="reviewFormContainer">
        <form onSubmit={this.handleSubmit}>
        <TextInputField
          content={this.state.reason_of_visit}
          label="Reason of visit: "
          name="reason_of_visit"
          handleChange={this.handleChange}
        />
        <RadioButtonField
          content={this.state.quality_of_service}
          label="Quality of service"
          name="quality_of_service"
          handleChange={this.handleChange}
        />
        <TextAreaField
          content={this.state.comment}
          label="Review Comment: "
          name="comment"
          handleChange={this.handleChange}
        />
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer
