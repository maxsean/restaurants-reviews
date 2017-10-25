import RadioButtonField from '../../src/components/RadioButtonField'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('RadioButtonField', () => {
  let wrapper,
      onChange;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <RadioButtonField
        content={5}
        label="Quality of service"
        name="quality_of_service"
        checked={false}
      />
    );
  });

  it('should render div className of radioButtonField', () => {
    expect(wrapper.find('div.radioButtonField')).toBePresent();
  });
  it('should render a label with the text Quality of service', () => {
    expect(wrapper.find('label').text()).toEqual(" Quality of service 1  2  3  4  5 ");
  })
  it('should render 5 input fields with type radio', () => {
    expect(wrapper.find('input.quality_of_service').at(0).props()).toEqual({
      name: 'quality_of_service',
      type: 'radio',
	    className: 'quality_of_service',
	    value: 1,
      onChange: undefined
    });
    expect(wrapper.find('input.quality_of_service').at(1).props()).toEqual({
      name: 'quality_of_service',
      type: 'radio',
      className: 'quality_of_service',
      value: 2,
      onChange: undefined
    });
    expect(wrapper.find('input.quality_of_service').at(2).props()).toEqual({
      name: 'quality_of_service',
      type: 'radio',
      className: 'quality_of_service',
      value: 3,
      onChange: undefined
    });
    expect(wrapper.find('input.quality_of_service').at(3).props()).toEqual({
      name: 'quality_of_service',
      type: 'radio',
      className: 'quality_of_service',
      value: 4,
      onChange: undefined
    });
    expect(wrapper.find('input.quality_of_service').at(4).props()).toEqual({
      name: 'quality_of_service',
      type: 'radio',
      className: 'quality_of_service',
      value: 5,
      onChange: undefined
    });
  })
  it('it should create a hidden input field', () => {
    expect(wrapper.find('input.quality_of_service').at(5).props()).toEqual({
      name: 'quality_of_service',
      type: 'radio',
      className: 'quality_of_service',
      value: 6,
      checked: false,
      hidden: true
    })
  })
});
