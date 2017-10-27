import React, {Component} from 'react';
import TextInputField from '../components/TextInputField';
import TextAreaField from '../components/TextAreaField';

class RestaurantFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      dollar_value: '',
      description: '',
      picture: '',
      phone_number: '',
      website_url: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value})
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      dollar_value: '',
      description: '',
      picture: '',
      phone_number: '',
      website_url: ''
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.current_user) {
      let formPayLoad = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        dollar_value: parseInt(this.state.dollar_value, 10),
        description: this.state.description,
        picture: this.state.picture,
        phone_number: this.state.phone_number,
        website_url: this.state.website_url,
        user_id: this.props.current_user.id
      }
    this.props.addNewRestaurant(formPayLoad);
    this.handleClearForm(event);
    }
  }

  render(){
    return(
      <form className='callout' onSubmit={this.handleSubmit}>
        <TextInputField
          content={this.state.name}
          label="Name:"
          name="name"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.address}
          label="Address:"
          name="address"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.city}
          label="City:"
          name="city"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.state}
          label="State:"
          name="state"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.zip}
          label="Zip Code:"
          name="zip"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.dollar_value}
          label="Pricing:"
          name="dollar_value"
          handleChange={this.handleChange}
        />
        <TextAreaField
          content={this.state.description}
          label="Description:"
          name="description"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.picture}
          label="Picture:"
          name="picture"
          handleChange={this.handleChange}
        />
        <TextInputField
          placeholder="000-000-0000"
          content={this.state.phone_number}
          label="Phone Number:"
          name="phone_number"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.website_url}
          label="Restuarant Website:"
          name="website_url"
          handleChange={this.handleChange}
        />

        <div className='button-group'>
          <button className='button' onClick={this.handleClearForm}>Clear</button>
          <input className='button' type='submit' value='Submit' />
        </div>
      </form>
    )
  }
}

export default RestaurantFormContainer;
