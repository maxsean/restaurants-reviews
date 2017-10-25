import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import RestaurantShow from '../../src/components/RestaurantShow'

describe('RestaurantShow', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <RestaurantShow
        name="Testaurant"
        address="test street"
        city="test city"
        state="test state"
        zip="00000"
        dollar_value="1"
        description="my favorite description"
        picture="https://goo.gl/images/Urrjky"
        phone_number="00000"
        website_url="www.test.fake"
      />
    )
  });

  it('should have name of restaurant', () => {
    expect(wrapper.find('p').at(0).text()).toBe('Testaurant');
  });

  it('should have address of restaurant', () => {
    expect(wrapper.find('p').at(1).text()).toBe('Address: test street');
  });

  it('should have city of restaurant', () => {
    expect(wrapper.find('p').at(2).text()).toBe('City: test city');
  });

  it('should have state of restaurant', () => {
    expect(wrapper.find('p').at(3).text()).toBe('State: test state');
  });

  it('should have zipcode of restaurant', () => {
    expect(wrapper.find('p').at(4).text()).toBe('Zip: 00000');
  });

  it('should have pricing of restaurant', () => {
    expect(wrapper.find('p').at(5).text()).toBe('Pricing: 1');
  });

  it('should have description of restaurant', () => {
    expect(wrapper.find('p').at(6).text()).toBe('Description: my favorite description');
  });

  it('should have phone number of restaurant', () => {
    expect(wrapper.find('p').at(7).text()).toBe('Phone Number: 00000');
  });

  it('should have website url of restaurant', () => {
    expect(wrapper.find('p').at(8).text()).toBe('Website: www.test.fake');
  });

  it('should have image of restaurant', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveProp('src', 'https://goo.gl/images/Urrjky')
  })

  it('should have button for viewing review demographics', () => {
    expect(wrapper.find('button')).toBePresent();
    expect(wrapper.find('button').text()).toBe("Review Demographics")
  })

})
