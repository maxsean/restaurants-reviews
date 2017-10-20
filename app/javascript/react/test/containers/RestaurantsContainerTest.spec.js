import RestaurantsContainer from '../../src/containers/RestaurantsContainer';
import RestaurantFormContainer from '../../src/containers/RestaurantFormContainer';
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for RestaurantsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RestaurantsContainer />)
  })

  it('renders a div with the correct props', () => {
    expect(wrapper.find('div.container')).toBePresent();
  });

  it('should render a single RestaurantFormContainer', () => {
    expect(wrapper.find(RestaurantFormContainer)).toBePresent();
  })

  it('RestaurantFormContainer should have specific props', () => {
    expect(wrapper.find(RestaurantFormContainer).props()).toEqual({
      addNewRestaurant: jasmine.any(Function)
    })
  })
})
