require 'rails_helper'

RSpec.describe Review, type: :model do
  it {should have_valid(:reason_of_visit).when(1)}
  it {should_not have_valid(:reason_of_visit).when(nil, '')}

  it {should have_valid(:quality_of_service).when(1)}
  it {should_not have_valid(:quality_of_service).when(nil, '')}

  it {should have_valid(:noise_level).when(1)}
  it {should_not have_valid(:noise_level).when(nil, '')}

  it {should have_valid(:fits_taste).when(true, false)}
  it {should_not have_valid(:fits_taste).when(nil, '', 'test')}

  it {should have_valid(:lighting).when(1)}
  it {should_not have_valid(:lighting).when(nil, '')}

  it {should have_valid(:cleanliness).when(1)}
  it {should_not have_valid(:cleanliness).when(nil, '')}

  it {should have_valid(:comment).when(nil, 'It was great!')}

end
