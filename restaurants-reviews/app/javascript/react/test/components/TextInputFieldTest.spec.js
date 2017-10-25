import TextInputField from '../../src/components/TextInputField'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('TextInputField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TextInputField
        id='name'
        name='name'
        type='text'
        value=''
        label='name'
        placeholder=''
      />
    );
  });

  it('should render an input with specific props', () => {
    expect(wrapper.find('input').props()).toEqual({
      id: 'name',
	    name: 'name',
	    type: 'text',
      placeholder: '',
	    value: undefined
    });
  });

  it('should render an label', () => {
    expect(wrapper.find('label').text()).toBe('name');
  });
});
