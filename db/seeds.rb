# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user1 = User.create!(first_name: "Mark", last_name: "Swinimer", username: "mswinimer", email: "mswinimernottaken@gmail.com", password: "123456")


restaurant1 = Restaurant.create!(name: "Panera", address: "55 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 2,
  description: "Sells bread.", picture: "https://chefservicesgroup.com/wp-content/uploads/2011/12/panera.jpg", phone_number: "3333333333", website_url: "https://www.panerabread.com", user: User.first)

restaurant2 = Restaurant.create!(name: "PoopDog", address: "34 Potato St.", city: "Boston", state: "MA", zip: "02301", dollar_value: 3,
  description: "The dog is the chef", picture: "https://iheartdogs.com/wp-content/uploads/2014/03/dogchef.jpg", phone_number: "2222222222", website_url: "www.dog.com", user: User.first)

restaurant3 = Restaurant.create!(name: "Wendy's", address: "75 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 1,
    description: "Hamburgers", picture: "http://www.nrn.com/sites/nrn.com/files/wendys.gif", phone_number: "1111111111", website_url: "https://www.wendys.com", user: User.first)

review1 = Review.create!(restaurant: restaurant1, reason_of_visit: "booze", quality_of_service: 2, noise_level: 1, fits_taste: true, lighting: 1, cleanliness: 2, comment: "This is a review, believe it...", user: user1)

review2 = Review.create!(restaurant: restaurant1, reason_of_visit: "croutons", quality_of_service: 2, noise_level: 1, fits_taste: true, lighting: 1, cleanliness: 2, comment: "This is yet another review, don't believe it", user: user1)
