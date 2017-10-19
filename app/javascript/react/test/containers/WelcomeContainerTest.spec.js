import WelcomeContainer from '../../src/containers/WelcomeContainer';
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<WelcomeContainer />)
  })

  it('renders a div with the correct props', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should pass', () => {
    wrapper = shallow(<WelcomeContainer />)
    expect(wrapper.find('.welcome-quote').text()).toBe('"There are many restaurant review sites. Good lord, there are so many. What is this one? It\'s got them pie charts. I love pie charts. I love them here. I love them even over there. Yeah."  - Sean, 2017');
  })
})
