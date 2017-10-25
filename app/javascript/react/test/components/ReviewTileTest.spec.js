import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import ReviewTile from '../../src/components/ReviewTile'


xdescribe('A test for ReviewTile component', () => {
  let wrapper,
      userExample,
      current_userExample;

  beforeEach(() => {
    userExample = {username: "Johnny"}
    current_userExample={ id: 1 }
    wrapper = mount(
      <ReviewTile
        reason_of_visit="outing"
        quality_of_service={2}
        noise_level={2}
        fits_taste={true}
        lighting={2}
        cleanliness={2}
        comment="all 2s"
        created_at="2017-10-23T19:03:11.057Z"
        user={userExample}
        current_user={current_userExample}
      />
    )
  })
  it('should have the username of the reviewer', () => {
    expect(wrapper.find('p').at(0).text()).toBe('Johnny')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(1).text()).toBe('Reason of Visit: outing')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(2).text()).toBe('Quality of Service: 2')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(3).text()).toBe('Noise Level: 2')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(4).text()).toBe('Lighting: 2')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(5).text()).toBe('Taste: ')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(6).text()).toBe('Cleanliness: 2')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(7).text()).toBe('Reviewed on Oct 23 2017')
  })
  it('should have the reason of visit', () => {
    expect(wrapper.find('p').at(8).text()).toBe('all 2s')
  })

})
