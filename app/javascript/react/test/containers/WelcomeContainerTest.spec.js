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
    expect(wrapper.find('.welcome-quote').text()).toBe('"There are many restaurant review sites. Good lord, there are so many. What is this one? It\'s got them pie charts. I love pie charts. I love them here. I love them even over there. Yeah."  - Sean, 2017');
  })
})
