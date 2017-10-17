require "rails_helper"

RSpec.describe Restaurant, type: :model do

  it {should have_valid(:name).when('Panera') }
  it {should_not have_valid(:name).when(nil, '')}

  it {should have_valid(:address).when('77 Summer st') }
  it {should_not have_valid(:address).when(nil, '')}

  it {should have_valid(:city).when('Boston') }
  it {should_not have_valid(:city).when(nil, '')}

  it {should have_valid(:state).when('MA') }
  it {should_not have_valid(:state).when(nil, '') }

  it {should have_valid(:zip).when('02111') }
  it {should_not have_valid(:zip).when(nil, '') }

  it {should have_valid(:dollar_value).when(1) }
  it {should_not have_valid(:dollar_value).when(nil, '') }

  it {should have_valid(:description).when('It\'s a restaurant!', nil) }

  it {should have_valid(:picture).when('www.test/picture.com', nil) }

  it {should have_valid(:phone_number).when('9786652426') }
  it {should_not have_valid(:phone_number).when(nil, '') }

  it {should have_valid(:website_url).when('www.Panera.com', nil) }
end
