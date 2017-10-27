require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_user) {User.create!(id: 1, first_name: "John", last_name: "Smith", username: "johnsmith", email: "johnsmith@smith.com", password: "1234567" )}
  let!(:first_restaurant) { Restaurant.create!( name: "Panera", address: "55 Summer St.", city: "Boston",
    state: "MA", zip: "02111", dollar_value: 2, description: "something", picture: "fakephoto", phone_number: "1234567890",
    website_url: "asdf", user_id: 1) }
  let!(:first_review) { Review.create!( reason_of_visit: "Booze", quality_of_service: 3, noise_level: 1,
      fits_taste: false, lighting: 3, cleanliness: 1, comment: "It was Food.", user_id: 1, restaurant: first_restaurant )}

  describe "POST#create" do
    it "should create a new review" do
      post_json = {
        reason_of_visit: "Booze",
        quality_of_service: 3,
        noise_level: 1,
        fits_taste: false,
        lighting: 3,
        cleanliness: 1,
        comment: "It was Food.",
        user_id: first_user.id,
        restaurant_id: first_restaurant.id }.to_json
        expect{ post :create, body: post_json}.to change{ Review.count }.by(1)
      end
      it "should create a new review" do
        post_json = {
          reason_of_visit: 8,
          quality_of_service: "Dog",
          noise_level: 1,
          fits_taste: nil,
          lighting: -99,
          cleanliness: 1,
          user_id: 1,
          restaurant_id: first_restaurant.id }.to_json
          expect{ post :create, body: post_json}.to change{ Review.count }.by(0)
        end
        it "should return the json of updated list of reviews" do

          post_json = {
            reason_of_visit: "Booze",
            quality_of_service: 3,
            noise_level: 1,
            fits_taste: false,
            lighting: 3,
            cleanliness: 1,
            comment: "It was Food.",
            user_id: first_user.id,
            restaurant_id: first_restaurant.id }.to_json

            post :create, body: post_json
            restaurant_id = JSON.parse(post_json)["restaurant_id"]
            returned_json = JSON.parse(Review.where(restaurant_id: restaurant_id).order('created_at DESC').to_json(include: :user))

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json")

            expect(returned_json).to be_kind_of(Array)
            expect(returned_json).to_not be_kind_of(Hash)
          end
        end
      end
