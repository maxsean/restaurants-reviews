import React from 'react'
import TextInputField from '../components/TextInputField'
import TextAreaField from '../components/TextAreaField'
import RadioButtonField from '../components/RadioButtonField'
import RadioBooleanField from '../components/RadioBooleanField'

class ReviewFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason_of_visit: "",
      quality_of_service: null,
      noise_level: null,
      lighting: null,
      cleanliness: null,
      fits_taste: false,
      comment: "",
      review: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addNewReview = this.addNewReview.bind(this)
  }

  addNewReview(formPayLoad) {
    fetch('/api/v1/reviews', {
    method: 'POST',
    body: JSON.stringify(formPayLoad)
    })
  .then(response => response.json())
  .then(responseData => {
    this.setState({ reviews: responseData })
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = {
      reason_of_visit: this.state.reason_of_visit,
      quality_of_service: this.state.quality_of_service,
      noise_level: this.state.noise_level,
      lighting: this.state.lighting,
      cleanliness: this.state.cleanliness,
      fits_taste: this.state.fits_taste,
      comment: this.state.comment
  }
    this.setState({ review: formPayLoad })
    this.addNewReview(formPayLoad)
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  render() {
    console.log("-----")
    console.log(this.state.review)
    console.log("-----")
    return(
      <div className="reviewFormContainer">
        <form className='callout' onSubmit={this.handleSubmit}>
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
          <RadioButtonField
            content={this.state.quality_of_service}
            label="Noise Level"
            name="noise_level"
            handleChange={this.handleChange}
          />
          <RadioButtonField
            content={this.state.quality_of_service}
            label="Lighting"
            name="lighting"
            handleChange={this.handleChange}
          />
          <RadioButtonField
            content={this.state.quality_of_service}
            label="Cleanliness"
            name="cleanliness"
            handleChange={this.handleChange}
          />
          <RadioBooleanField
            content={this.state.quality_of_service}
            label="Fits Taste?"
            name="fits_taste"
            handleChange={this.handleChange}
          />
          <TextAreaField
            content={this.state.comment}
            label="Review Comment: "
            name="comment"
            handleChange={this.handleChange}
          />
          <div className='button-group'>
            <input className='button' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer
