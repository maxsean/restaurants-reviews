require "rails_helper"

RSpec.describe Api::V1::VotesController, type: :controller do
  let!(:first_user) {User.create!(id: 1, first_name: "John", last_name: "Smith", username: "johnsmith", email: "johnsmith@smith.com", password: "1234567" )}
  let!(:second_user) {User.create!(id: 2, first_name: "John", last_name: "Smith", username: "johnsmith", email: "johnsmith2@smith.com", password: "1234567" )}
  let!(:first_restaurant) { Restaurant.create!( id: 1, name: "Panera", address: "55 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890", website_url: "asdf", user_id: 1) }
  let!(:first_review) {Review.create!(restaurant_id: 1, reason_of_visit: "food", quality_of_service: 1, noise_level: 2, fits_taste: true, lighting: 1, cleanliness: 1, comment: "It was okay", user_id: 1, id: 1)}
  let!(:second_review) {Review.create!(restaurant_id: 1, reason_of_visit: "food", quality_of_service: 1, noise_level: 2, fits_taste: true, lighting: 1, cleanliness: 1, comment: "It was okay", user_id: 2, id: 2)}
  let!(:vote) {Vote.create!(review_id: 2, user_id: 2, value: 1)}

  describe "POST#create" do
    it "should return current karma if no value is sent" do
      post_json = {user_id: second_user.id, review_id: second_review.id, value: nil}.to_json
      post :create, body: post_json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(returned_json["karma"]).to eq 1
    end
  end
end
