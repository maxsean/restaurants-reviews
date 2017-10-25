import RadioBooleanField from '../../src/components/RadioBooleanField';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('RadioBooleanField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <RadioBooleanField
        id='fits_taste'
        name='fits_taste'
        type='radio'
        value= {true}
        label='Fits Taste?'
      />
    );
  });

  it('should render div className of radioButtonField', () => {
    expect(wrapper.find('div.radioBooleanField')).toBePresent();
  });
  it('should render a lebel with the text Fits Taste?', () => {
    expect(wrapper.find('label').text()).toEqual(" Fits Taste? Yes  No ");
  })
  it('should render 2 input fields with type radio', () => {
    expect(wrapper.find('input').at(0).props()).toEqual({
      name: 'fits_taste',
      type: 'radio',
	    value: true,
      onChange: undefined
    });
    expect(wrapper.find('input').at(1).props()).toEqual({
      name: 'fits_taste',
      type: 'radio',
      value: false,
      onChange: undefined
    });
  })
  it('should create a hidden third input field', () => {
    expect(wrapper.find('input').at(2).props()).toEqual({
      name: 'fits_taste',
      type: 'radio',
      value: false,
      onChange: undefined,
      checked: undefined,
      hidden: true
    });
  })
});
