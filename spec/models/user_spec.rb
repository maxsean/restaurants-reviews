require 'rails_helper'

RSpec.describe User, type: :model do
  it {should have_valid(:first_name).when("Buster")}
  it {should_not have_valid(:first_name).when(nil, "")}

  it {should have_valid(:last_name).when("Bluth")}
  it {should_not have_valid(:last_name).when(nil, "")}

  it {should have_valid(:username).when("busterbluth1")}
  it {should_not have_valid(:username).when(nil, "")}

  it {should have_valid(:email).when("buster@bluth.com")}
  it {should_not have_valid(:email).when(nil, "")}

  it {should have_valid(:avatar).when("http://www.johmsmialig.com")}

  it {should have_many(:reviews)}

  it {should have_many(:restaurants)}

  it {should_not belong_to(:restaurant)}

  it {should_not belong_to (:reviews)}

  it "has a matching password confirmation for the password" do
    user = User.new
    user.password = "password"
    user.password_confirmation = "anotherpassword"

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end
end
