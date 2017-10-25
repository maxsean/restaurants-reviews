require "rails_helper"

RSpec.describe Api::V1::RestaurantsController, type: :controller do


  let!(:first_user) {User.create!(id: 1, first_name: "John", last_name: "Smith", username: "johnsmith", email: "johnsmith@smith.com", password: "1234567" )}
  let!(:first_restaurant) { Restaurant.create!( name: "Panera", address: "55 Summer St.", city: "Boston",
          state: "MA", zip: "02111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
          website_url: "asdf", user_id: 1) }

  describe "GET#index" do
    it "should return a single sample from all restaurants" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
    end
  end

  describe "GET#show" do
    it "should return a restaurant with its associations when given a restaurant id" do
      get :show, params: {id: first_restaurant.id}
      returned_json = JSON.parse(response.body)
      expected_json = JSON.parse(returned_json["restaurant"])

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
      expect(expected_json["name"]).to eq "Panera"
      expect(expected_json["city"]).to eq "Boston"
      expect(expected_json["dollar_value"]).to eq 2
    end
  end

  describe "POST#create" do
    it "should create a new restaurant" do

    post_json = { name: "Panera", address: "55 Summer St.", city: "Boston",
              state: "MA", zip: "02111", dollar_value:
              2, description: "something", picture: "fakephoto", phone_number: "1234567890",
              website_url: "asdf", user_id: first_user.id }.to_json

      expect{ post :create, body: post_json }.to change{ Restaurant.count }.by(1)
    end

    it "should not create a new restaurant when props violate validations" do
      post_json = { name: "Panera", address: "55 Summer St.", city: "Boston",
              state: "MA", zip: "02111", dollar_value:
              25, description: "something", picture: "fakephoto", phone_number: "123456789",
              website_url: "asdf" }.to_json

      expect{ post :create, body: post_json }.to change{ Restaurant.count }.by(0)
    end

    it "should return the json of the new restaurant" do

      post_json = { name: "Panera", address: "55 Summer St.", city: "Boston",
              state: "MA", zip: "02111", dollar_value:
              2, description: "something", picture: "fakephot", phone_number: "1234567890",
              website_url: "asdf", user_id: 1 }.to_json

      post :create, body: post_json
      returned_json = JSON.parse(response.body)["restaurant"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq "Panera"


    end
  end
end
