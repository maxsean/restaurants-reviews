import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import SearchResultsContainer from '../../src/containers/SearchResultsContainer'
import RestaurantTile from '../../src/components/RestaurantTile'

describe('A test for SearchResultsContainer', () => {
  let wrapper;

  beforeEach(() => {
    const example = [
      {id: 1, name: "Panera", address: "55 Summer St.", city: "Boston",
              state: "MA", zip: "02111", dollar_value: 2, user_id: 1},
      {id: 2, name: "Danera", address: "85 Summer St.", city: "Cambridge",
              state: "MA", zip: "02121", dollar_value: 5, user_id: 2}
    ]

    wrapper = mount(<SearchResultsContainer restaurants={example}/>)
  })

  it('renders RestaurantTile components', () => {
    expect(wrapper.find('RestaurantTile')).toBePresent();
  })

  it('a RestaurantTile component have specified props', () => {
    expect(wrapper.find('RestaurantTile').at(0).props()).toEqual({
      id: 1,
      name: "Panera",
      address: "55 Summer St.",
      city: "Boston",
      state: "MA",
      zip: "02111",
      dollar_value: 2,
      description: undefined,
	    picture: undefined,
	    phone_number: undefined,
	    website_url: undefined,
	    dining_type: undefined,
	    food_type: undefined
    });
  })

  it('a RestaurantTile component have specified props', () => {
    expect(wrapper.find('RestaurantTile').at(1).props()).toEqual({
      id: 2,
      name: "Danera",
      address: "85 Summer St.",
      city: "Cambridge",
      state: "MA",
      zip: "02121",
      dollar_value: 5,
      description: undefined,
	    picture: undefined,
	    phone_number: undefined,
	    website_url: undefined,
	    dining_type: undefined,
	    food_type: undefined
    })
  })
})
