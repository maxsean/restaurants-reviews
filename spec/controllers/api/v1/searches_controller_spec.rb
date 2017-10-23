require "rails_helper"

RSpec.describe Api::V1::SearchesController, type: :controller do
  let!(:first_user) {User.create!(id: 1, first_name: "John", last_name: "Smith", username: "johnsmith", email: "johnsmith@smith.com", password: "1234567" )}
  let!(:first_restaurant) { Restaurant.create!(id: 1, name: "Panera", address: "55 Summer St.", city: "Boston",
          state: "MA", zip: "02111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
          website_url: "asdf", user_id: 1) }

  let!(:second_restaurant) { Restaurant.create!(id: 2, name: "Panera", address: "55 Summer St.", city: "Cambridge",
          state: "MA", zip: "02111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
          website_url: "asdf", user_id: 1) }

  describe "POST#create" do
    it "returns the json of the query result" do
      post_json = { value: "Panera" }.to_json
      post :create, body: post_json

      returned_json = JSON.parse(response.body)["restaurant"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Array)
      expect(returned_json.length).to eq 2
    end

    it "only return query results that match the value" do
      post_json = { value: "Boston" }.to_json
      post :create, body: post_json

      returned_json = JSON.parse(response.body)["restaurant"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Array)
      expect(returned_json.length).to eq 1
      expect(returned_json[0]["city"]).to eq "Boston"
    end
  end
end
