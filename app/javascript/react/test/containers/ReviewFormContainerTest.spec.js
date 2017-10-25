import TextInputField from '../../src/components/TextInputField'
import TextAreaField from '../../src/components/TextAreaField'
import RadioBooleanField from '../../src/components/RadioBooleanField'
import RadioButtonField from '../../src/components/RadioButtonField'
import ReviewFormContainer from '../../src/containers/ReviewFormContainer'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    spyOn(ReviewFormContainer.prototype, 'handleSubmit')
    wrapper = mount(
      <ReviewFormContainer />
    );
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      reason_of_visit: "",
      quality_of_service: null,
      noise_level: null,
      lighting: null,
      cleanliness: null,
      fits_taste: false,
      comment: "",
      checked: false
    })
  })

  it('renders a form', () => {
    expect(wrapper.find('form')).toBePresent();
  });
  it('renders a button with the value of "Submit"', () => {
    expect(wrapper.find('input')).toBePresent();
    expect(wrapper.find('input.button').props()).toEqual({
        className: "button",
        type: "submit",
        value: "Submit"
    })
  })
  it('should render the text input field components', () => {
    expect(wrapper.find(TextInputField)).toBePresent();
  })
  it('should render a text area field component', () => {
    expect(wrapper.find(TextAreaField)).toBePresent();
  })
  it('should render the RadioButtonField components', () => {
    expect(wrapper.find(RadioButtonField)).toBePresent();
  })
  it('should render the a RadioBooleanField component', () => {
    expect(wrapper.find(RadioBooleanField)).toBePresent();
  })
  it('should submit the form on click', () => {
    wrapper.find('form').props().onSubmit()
    expect(ReviewFormContainer.prototype.handleSubmit).toHaveBeenCalled();
    expect(wrapper.state()).toEqual({
      reason_of_visit: "",
      quality_of_service: null,
      noise_level: null,
      lighting: null,
      cleanliness: null,
      fits_taste: false,
      comment: "",
      checked: false
    })
  })
  it('should render text input field with specific props depending on state', () => {
    wrapper.setState({
      reason_of_visit: "outing",
      quality_of_service: 5,
      noise_level: 5,
      lighting: 5,
      cleanliness: 1,
      fits_taste: true,
      comment: "It was great!",
      checked: false
    })
    expect(wrapper.find(TextInputField).props()).toEqual({
      content: "outing",
      label: "Reason of visit: ",
      name: "reason_of_visit",
      handleChange: jasmine.any(Function),
      checked: false
    })
    expect(wrapper.find(RadioButtonField).at(0).props()).toEqual({
      content: 5,
      label: "Quality of service",
      name: "quality_of_service",
      handleChange: jasmine.any(Function),
      checked: false
    })
    expect(wrapper.find(RadioButtonField).at(1).props()).toEqual({
      content: 5,
      label: "Noise Level",
      name: "noise_level",
      handleChange: jasmine.any(Function),
      checked: false
    })
    expect(wrapper.find(RadioButtonField).at(2).props()).toEqual({
      content: 5,
      label: "Lighting",
      name: "lighting",
      handleChange: jasmine.any(Function),
      checked: false
    })
    expect(wrapper.find(RadioButtonField).at(3).props()).toEqual({
      content: 1,
      label: "Cleanliness",
      name: "cleanliness",
      handleChange: jasmine.any(Function),
      checked: false
    })
    expect(wrapper.find(RadioBooleanField).at(0).props()).toEqual({
      content: true,
      label: "Fits Taste?",
      name: "fits_taste",
      handleChange: jasmine.any(Function),
      checked: false
    })
    expect(wrapper.find(TextAreaField).props()).toEqual({
      content: "It was great!",
      label: "Review Comment: ",
      name: "comment",
      handleChange: jasmine.any(Function),
    })
  });
})
