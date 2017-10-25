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
      checked: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm() {
    this.setState({
          reason_of_visit: "",
          quality_of_service: null,
          noise_level: null,
          lighting: null,
          cleanliness: null,
          fits_taste: false,
          comment: "",
          checked: true})
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
      comment: this.state.comment,
      user_id: this.props.current_user.id,
      restaurant_id: this.props.restaurant_id
  }
    this.props.addNewReview(formPayLoad)
    this.clearForm()
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="reviewFormContainer">
        <hr />
        <form className='callout' onSubmit={this.handleSubmit}>
          <TextInputField
            content={this.state.reason_of_visit}
            label="Reason of visit: "
            name="reason_of_visit"
            handleChange={this.handleChange}
            checked={this.state.checked}
          />
          <RadioButtonField
            content={this.state.quality_of_service}
            label="Quality of service"
            name="quality_of_service"
            checked={this.state.checked}
            handleChange={this.handleChange}
          />
          <RadioButtonField
            content={this.state.noise_level}
            label="Noise Level"
            name="noise_level"
            checked={this.state.checked}
            handleChange={this.handleChange}
          />
          <RadioButtonField
            content={this.state.lighting}
            label="Lighting"
            name="lighting"
            checked={this.state.checked}
            handleChange={this.handleChange}
          />
          <RadioButtonField
            content={this.state.cleanliness}
            label="Cleanliness"
            name="cleanliness"
            checked={this.state.checked}
            handleChange={this.handleChange}
          />
          <RadioBooleanField
            content={this.state.fits_taste}
            label="Fits Taste?"
            name="fits_taste"
            checked={this.state.checked}
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
