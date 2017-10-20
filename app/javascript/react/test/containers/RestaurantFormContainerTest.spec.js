import RestaurantFormContainer from '../../src/containers/RestaurantFormContainer'
import RestaurantsContainer from '../../src/containers/RestaurantsContainer'
import TextInputField from '../../src/components/TextInputField'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';


describe('RestaurantFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    spyOn(RestaurantFormContainer.prototype, 'handleChange').and.callThrough();

    wrapper = mount(
      <RestaurantFormContainer />
    );
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
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
      })
  })

  it('renders a div with the correct props', () => {
    expect(wrapper.find('form')).toBePresent();
  });

  it('should render the text input field components', () => {
    expect(wrapper.find(TextInputField)).toBePresent();
  })

  it('should have a Clear button', () => {
    expect(wrapper.find('button').text()).toBe('Clear');
  });

  it('should render text input field with specific props depending on state', () => {
    wrapper.setState({
      name: 'Subway',
      address: 'across the street',
      city: 'Here',
      state: 'MA',
      zip: '00000',
      dollar_value: '2',
      description: 'restaurant',
      picture: 'www.picture.com/image',
      phone_number: '0000000000',
      website_url: 'www.restaurant.com'
     });
    expect(wrapper.find(TextInputField).at(0).props()).toEqual({
        content: "Subway",
        label: "Name:",
        name: "name",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(1).props()).toEqual({
        content: "across the street",
        label: "Address:",
        name: "address",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(2).props()).toEqual({
        content: "Here",
        label: "City:",
        name: "city",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(3).props()).toEqual({
        content: "MA",
        label: "State:",
        name: "state",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(4).props()).toEqual({
        content: "00000",
        label: "Zip Code:",
        name: "zip",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(5).props()).toEqual({
        content: "2",
        label: "Pricing:",
        name: "dollar_value",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(6).props()).toEqual({
        content: "restaurant",
        label: "Description:",
        name: "description",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(7).props()).toEqual({
        content: "www.picture.com/image",
        label: "Picture:",
        name: "picture",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(8).props()).toEqual({
        content: "0000000000",
        label: "Phone Number:",
        name: "phone_number",
        handleChange: jasmine.any(Function)
    })
    expect(wrapper.find(TextInputField).at(9).props()).toEqual({
        content: "www.restaurant.com",
        label: "Restuarant Website:",
        name: "website_url",
        handleChange: jasmine.any(Function)
    })
  });
})
