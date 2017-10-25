require "rails_helper"

RSpec.describe Api::V1::SearchesController, type: :controller do
  let!(:first_user) {User.create!(first_name: "Mary", last_name: "Swinimer", username: "maryswinimer", email: "maryswinimer@gmail.com", password: "1234567" )}
  let!(:first_restaurant) { Restaurant.create!( name: "Jamba Juice", address: "Test", city: "Bronco",
          state: "PA", zip: "99999", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
          website_url: "asdf", user_id: 1) }

  let!(:second_restaurant) { Restaurant.create!( name: "Longhorn Steakhouse", address: "Another St.", city: "Riverside",
          state: "CT", zip: "11111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
          website_url: "asdf", user_id: 1) }

  describe "POST#create" do
    it "returns the json of the query result" do
      post_json = { value: "Jamba Juice" }.to_json
      post :create, body: post_json

      returned_json = JSON.parse(response.body)["restaurant"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Array)
      expect(returned_json.length).to eq 1
    end

    it "only return query results that match the value" do
      post_json = { value: "Riverside" }.to_json
      post :create, body: post_json

      returned_json = JSON.parse(response.body)["restaurant"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Array)
      expect(returned_json.length).to eq 1
      expect(returned_json[0]["city"]).to eq "Riverside"
    end
  end
end
