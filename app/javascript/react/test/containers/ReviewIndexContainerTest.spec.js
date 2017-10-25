import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import ReviewIndexContainer from '../../src/containers/ReviewIndexContainer'
import ReviewTile from '../../src/components/ReviewTile'

xdescribe('ReviewIndexContainer', () => {
  let example,
      wrapper;

  beforeEach(() => {
    const example_review = [
      {
        id: 1,
        restaurant_id: 1,
        reason_of_visit: "outing",
        quality_of_service: 2,
        noise_level: 2,
        fits_taste: true,
        lighting: 2,
        cleanliness: 2,
        comment: "all 2s",
        created_at: "2017-10-23T19:03:11.057Z",
        user: {
          username: "johnny"
          }
      }
    ]
    const example_current_user = {
        id: 1
    }
    wrapper = mount(
      <ReviewIndexContainer
        reviews={example_review}
        current_user={example_current_user}
      />
    )
  })

  it('renders ReviewTile components when a review exists', () => {
    expect(wrapper.find('ReviewTile')).toBePresent();
  })

  it('a ReviewTile component should have specified props', () => {
    expect(wrapper.find('ReviewTile').at(0).props()).toEqual({
      id: 1,
      reason_of_visit: "outing",
      quality_of_service: 2,
      noise_level: 2,
      fits_taste: true,
      lighting: 2,
      cleanliness: 2,
      comment: "all 2s",
      created_at: "2017-10-23T19:03:11.057Z",
      user: {
        username: "johnny"
      },
      current_user: { id: 1 }
    })
  })
})
