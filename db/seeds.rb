
user1 = User.create!(first_name: "John", last_name: "Smith", username: "jsmith", email: "john.smith@gmail.com", password: "123456")

user2 = User.create!(first_name: "Jill", last_name: "Jones", username: "jill.j", email: "jill.jones@gmail.com", password: "654321")

user3 = User.create!(first_name: "Franklin", last_name: "Brown", username: "b_frank", email: "frank_brown@gmail.com", password: "121212")

user4 = User.create!(first_name: "Hannah", last_name: "Slattery", username: "hms", email: "hannah.m.slattery@gmail.com", password: "135246")

user5 = User.create!(first_name: "Alex", last_name: "Gold", username: "aj_gold", email: "a.gold@gmail.com", password: "321654")


restaurant1 = Restaurant.create!(name: "The Barking Crab", address: "88 Sleeper St.", city: "Boston", state: "MA", zip: "02210", dollar_value: 2, description: "Lively waterfront seafood joint with open-air picnic-table dining & views of the Boston Harbor.", picture: "http://2.bp.blogspot.com/_OcRNnmwp9Ig/TGISQrxDccI/AAAAAAAAB38/XwDNplJTO1Y/s1600/DSC02722.JPG", phone_number: "6174262722", website_url: "www.barkingcrab.com", user: user1)

restaurant2 = Restaurant.create!(name: "Row 34", address: "383 Congress St.", city: "Boston", state: "MA", zip: "02210", dollar_value: 3, description: "This stylish brick-&-wood eatery serves an extensive oyster menu plus fish entrees & craft beers.", picture: "https://cdn.vox-cdn.com/uploads/chorus_image/image/45199978/Row_2034_2005_20Meg_20Jones_20Wall.0.0.jpg", phone_number: "6175535900", website_url: "www.row34.com", user: user2)

restaurant3 = Restaurant.create!(name: "Shojo Boston", address: "9 Tyler St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 1, description: "Trendy, late-night gastropub with elaborate murals dishing up offbeat takes on modern Asian fare.", picture: "http://www.mkimarchitecture.com/site/wp-content/uploads/2017/01/shojo1.jpg", phone_number: "6174237888", website_url: "http://places.singleplatform.com/shojo-boston/menu", user: user3)

restaurant4 = Restaurant.create!(name: "Meritage Restaurant", address: "70 Rowe Warf", city: "Boston", state: "MA", zip: "02110", dollar_value: 3, description: "'Vineyard-to-table' fare pairs with fine wines at this waterfront spot at the Boston Harbor Hotel.", picture: "https://cdn.vox-cdn.com/uploads/chorus_image/image/44308000/meritage.0.0.jpg", phone_number: "6174393995", website_url: "http://www.meritagetherestaurant.com/", user: user4)


review1_1 = Review.create!(restaurant: restaurant1, reason_of_visit: "Family Outing", quality_of_service: 5, noise_level: 5, fits_taste: true, lighting: 4, cleanliness: 4, comment: "The food was amazing! The atmosphere fantastic (if you like informal settings). The ambiance wonderful! You HAVE to try this place if you're in town (or if you live here and you've never been). Our server was super friendly, too.", user: user1)

review1_2 = Review.create!(restaurant: restaurant1, reason_of_visit: "Date", quality_of_service: 1, noise_level: 4, fits_taste: false, lighting: 3, cleanliness: 3, comment: "The food is really good, although I think the portions are a little small for the price.  It's very expensive seafood, but I guess that's expected in Boston and the prices are very visible.

We visited on a Saturday around 4:30 and waited 20 minutes to be seated (even with clearly empty tables visible on both sides of the restaurant). Once seated we had no service for ~10 minutes. Our drinks took another 10 minutes to arrive.  We asked the food runner for ketchup, and he never came back so I grabbed one from a nearby empty table.  We probably spoke to our server 3 times total, and even had to flag her down to pay the check when she walked past our table 3 separate times and never grabbed the cards to pay the bill.

I was really dissatisfied with the poor service.", user: user2)

review1_3 = Review.create!(restaurant: restaurant1, reason_of_visit: "Lunch", quality_of_service: 4, noise_level: 3, fits_taste: true, lighting: 2, cleanliness: 2, comment: "Fresh lobsters, crabs, shrimps and all kinds of seafood cooked in the purest and simplest way, mostly steamed and lightly salted. Place is always crowded even on Sunday nights. Parking is not available, you can find open street parking if you get lucky. Otherwise, pay park at one of the parking garages nearby.", user: user3)

review1_4 = Review.create!(restaurant: restaurant1, reason_of_visit: "Lunch", quality_of_service: 4, noise_level: 5, fits_taste: true, lighting: 3, cleanliness: 4, comment: "Been here twice, first with co-workers to grab a drink, which was fun.  The second time was extremely chaotic and we ended up leaving before we got seated.  Would definitely try again, have yet to eat here.  Neat atmosphere overall.", user: user4)

review1_5 = Review.create!(restaurant: restaurant1, reason_of_visit: "Dinner", quality_of_service: 1, noise_level: 5, fits_taste: false, lighting: 2, cleanliness: 1, comment: "Worst people ever. Such a loud and over priced place. Seating is horrible extremely uncomfortable. Small drinks that are way over priced. Sea food is 3/10 at best.. Not hard to Deep fry everything and have it come out bad.. PORTIONS my god what a rip off. My fish and chips was soo small i was still hungry after eating there. Never returning.", user: user5)

review2_1 = Review.create!(restaurant: restaurant1, reason_of_visit: "Family Outing", quality_of_service: 5, noise_level: 5, fits_taste: true, lighting: 4, cleanliness: 4, comment: "The food was amazing! The atmosphere fantastic (if you like informal settings). The ambiance wonderful! You HAVE to try this place if you're in town (or if you live here and you've never been). Our server was super friendly, too.", user: user1)

review2_2 = Review.create!(restaurant: restaurant1, reason_of_visit: "Date", quality_of_service: 1, noise_level: 4, fits_taste: false, lighting: 3, cleanliness: 3, comment: "The food is really good, although I think the portions are a little small for the price.  It's very expensive seafood, but I guess that's expected in Boston and the prices are very visible.

We visited on a Saturday around 4:30 and waited 20 minutes to be seated (even with clearly empty tables visible on both sides of the restaurant). Once seated we had no service for ~10 minutes. Our drinks took another 10 minutes to arrive.  We asked the food runner for ketchup, and he never came back so I grabbed one from a nearby empty table.  We probably spoke to our server 3 times total, and even had to flag her down to pay the check when she walked past our table 3 separate times and never grabbed the cards to pay the bill.

I was really dissatisfied with the poor service.", user: user2)

review2_3 = Review.create!(restaurant: restaurant1, reason_of_visit: "Lunch", quality_of_service: 4, noise_level: 3, fits_taste: true, lighting: 2, cleanliness: 2, comment: "Fresh lobsters, crabs, shrimps and all kinds of seafood cooked in the purest and simplest way, mostly steamed and lightly salted. Place is always crowded even on Sunday nights. Parking is not available, you can find open street parking if you get lucky. Otherwise, pay park at one of the parking garages nearby.", user: user3)

review2_4 = Review.create!(restaurant: restaurant1, reason_of_visit: "Lunch", quality_of_service: 4, noise_level: 5, fits_taste: true, lighting: 3, cleanliness: 4, comment: "Been here twice, first with co-workers to grab a drink, which was fun.  The second time was extremely chaotic and we ended up leaving before we got seated.  Would definitely try again, have yet to eat here.  Neat atmosphere overall.", user: user4)

review2_5 = Review.create!(restaurant: restaurant1, reason_of_visit: "Dinner", quality_of_service: 1, noise_level: 5, fits_taste: false, lighting: 2, cleanliness: 1, comment: "Worst people ever. Such a loud and over priced place. Seating is horrible extremely uncomfortable. Small drinks that are way over priced. Sea food is 3/10 at best.. Not hard to Deep fry everything and have it come out bad.. PORTIONS my god what a rip off. My fish and chips was soo small i was still hungry after eating there. Never returning.", user: user5)

review_1 = Review.create!(
  restaurant: restaurant3,
  reason_of_visit: "Family Party",
  quality_of_service: 2,
  noise_level: 1,
  fits_taste: true,
  lighting: 2,
  cleanliness: 3,
  comment: "I will come back again.",
  user: user1
)
