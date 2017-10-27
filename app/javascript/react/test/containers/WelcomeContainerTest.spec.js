import WelcomeContainer from '../../src/containers/WelcomeContainer';
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for WelcomeContainer', () => {
  let sample_restaurant,
      wrapper;

  beforeEach(() => {
    const example = {name: "Panera", address: "55 Summer St.", city: "Boston",
            state: "MA", zip: "02111", dollar_value: 2, user_id: 1}
    wrapper = mount(<WelcomeContainer sample_restaurant={example}/>)
  })

  it('renders a div with the correct props', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should pass', () => {
    expect(wrapper.find('.welcome-quote').text()).toBe("You would not have the same art on the walls in every restaurant or the same waiter uniforms. Neither should you have the same service style at every restaurant.");
  })
})
