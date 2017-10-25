require "rails_helper"

RSpec.describe Api::V1::DemographicsController, type: :controller do
  let!(:first_user) {User.create!(id: 1, first_name: "John", last_name: "Smith", username: "johnsmith", email: "johnsmith@smith.com", password: "1234567" )}
  let!(:first_restaurant) { Restaurant.create!(id: 1, name: "Panera", address: "55 Summer St.", city: "Boston",
          state: "MA", zip: "02111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
          website_url: "asdf", user_id: 1) }
  let!(:first_review) {Review.create!(restaurant_id: 1, reason_of_visit: "food", quality_of_service: 1, noise_level: 2, fits_taste: true, lighting: 1, cleanliness: 1, comment: "It was okay", user_id: 1, id: 1)}


  describe "GET#show" do
    it "should return a json when given a restaurant id" do
      get :show, params: {id: first_restaurant.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json.length).to eq 3

      expect(returned_json["children"]).to be_kind_of(Array)
      expect(returned_json["children"].length).to eq 6

      expect(returned_json["children"][0]["name"]).to eq "Reason of Visit"
      expect(returned_json["children"][0]["children"]).to be_kind_of(Array)
      expect(returned_json["children"][0]["children"].length).to eq 10

      expect(returned_json["children"][1]["name"]).to eq "Quality of Service"
      expect(returned_json["children"][1]["children"]).to be_kind_of(Array)
      expect(returned_json["children"][1]["children"].length).to eq 5

      expect(returned_json["children"][2]["name"]).to eq "Noise Level"
      expect(returned_json["children"][2]["children"]).to be_kind_of(Array)
      expect(returned_json["children"][2]["children"].length).to eq 5

      expect(returned_json["children"][3]["name"]).to eq "Lighting"
      expect(returned_json["children"][3]["children"]).to be_kind_of(Array)
      expect(returned_json["children"][3]["children"].length).to eq 5

      expect(returned_json["children"][4]["name"]).to eq "Cleanliness"
      expect(returned_json["children"][4]["children"]).to be_kind_of(Array)
      expect(returned_json["children"][4]["children"].length).to eq 5

      expect(returned_json["children"][5]["name"]).to eq "Fits Taste"
      expect(returned_json["children"][5]["children"]).to be_kind_of(Array)
      expect(returned_json["children"][5]["children"].length).to eq 2
    end
  end
end
