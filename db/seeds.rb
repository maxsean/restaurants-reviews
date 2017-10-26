
<<<<<<< HEAD
user1 = User.create!(first_name: "John", last_name: "Smith", username: "jsmith", email: "john.smith@gmail.com", password: "123456")

user2 = User.create!(first_name: "Jill", last_name: "Jones", username: "jill.j", email: "jill.jones@gmail.com", password: "654321")
=======
user1 = User.create!(first_name: "Mimi", last_name: "French", username: "mimifrench", email: "mimi@french.com", password: "123456")
user1 = User.create!(first_name: "John", last_name: "Smith", username: "johnsmith", email: "john@smith.com", password: "123456", admin: true)
>>>>>>> master

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

review2_1 = Review.create!(restaurant: restaurant2, reason_of_visit: "Dinner", quality_of_service: 5, noise_level: 3, fits_taste: true, lighting: 4, cleanliness: 5, comment: "We had 1 night in Boston, and this is where we chose for dinner. I’m so glad! The atmosphere is cozy but open. Energetic, but not too loud. We had a server who had the same balance - he was super attentive and offered expert guidance, but he was also very chill and easy going. We had several things from the raw menu (basically everything our server suggested) and a few other small plates. Everything was delicious, fresh, and thoughtfully prepared. We got lucky and were able to sneak in without a reservation because we went insanely early (like 5:30 pm). I wouldn’t try to go again without a reservation, it is definitely a super popular (and amazing!) place.", user: user1)

review2_2 = Review.create!(restaurant: restaurant2, reason_of_visit: "Date", quality_of_service: 1, noise_level: 4, fits_taste: false, lighting: 3, cleanliness: 3, comment: "Top notch place. Excellent oyster selection! The waiters and waitresses have great knowledge about them and can help describe the differences and guide you to a selection just right for you. Good beer selection. Nice atmosphere. They are doing this right and you will enjoy your visit!", user: user2)

review2_3 = Review.create!(restaurant: restaurant2, reason_of_visit: "Date", quality_of_service: 4, noise_level: 3, fits_taste: true, lighting: 4, cleanliness: 5, comment: "Fresh lobsters, crabs, shrimps and all kinds of seafood cooked in the purest and simplest way, mostly steamed and lightly salted. Place is always crowded even on Sunday nights. Parking is not available, you can find open street parking if you get lucky. Otherwise, pay park at one of the parking garages nearby.", user: user3)

review2_4 = Review.create!(restaurant: restaurant2, reason_of_visit: "Lunch", quality_of_service: 2, noise_level: 4, fits_taste: false, lighting: 4, cleanliness: 4, comment: "Casual but trendy place. Fun atmosphere, loud but not overly so. Food was fairly solid throughout. Oysters were great but messed up the order a bit. Lobster roll was tasty but way over priced. Clam chowder was lacking in clams and they tried to do a bit too much with it. Service was decent, little slow and impersonal. Overall a fairly average dining experience. ", user: user4)

review2_5 = Review.create!(restaurant: restaurant2, reason_of_visit: "Celebration", quality_of_service: 5, noise_level: 3, fits_taste: true, lighting: 4, cleanliness: 5, comment: "The place to go for millennials. Sort of hip and trendy. Good was good though but no cocktails. Beer and wine only. However great selection of that", user: user5)

review3_1 = Review.create!(restaurant: restaurant3, reason_of_visit: "Sports Game", quality_of_service: 1, noise_level: 4, fits_taste: false, lighting: 3, cleanliness: 3, comment: "Nice atmosphere..initially..until the young waitress sat me. She didn't greet me , tell me anything just shoved the menu in my face. Tried to forget her shortness and rudenes but when I asked about the drink specials she pointed at the menu ...when I explained I meant besides the wine and sake like a cocktail she simply turned the menu over . She clearly had an attitude and I thanked her kindly ..she never came back ..ever so I left ", user: user1)

review3_2 = Review.create!(restaurant: restaurant3, reason_of_visit: "Date", quality_of_service: 4, noise_level: 5, fits_taste: true, lighting: 2, cleanliness: 4, comment: "Super loud (maybe I am old) but so good. Great appetizers and ambiance.", user: user2)

review3_3 = Review.create!(restaurant: restaurant3, reason_of_visit: "Dinner", quality_of_service: 5, noise_level: 4, fits_taste: true, lighting: 2, cleanliness: 5, comment: "A mash up of urban music and Asian scenery. Dim atmosphere, with a live bar area. Wu Tang meets Shonen Jump. K'un Lun meets Harlem.
Anime and rap inspired drinks. Tasty food that would have you ordering more. The waitress was very nice. Overall, it was a good experience. I will return.", user: user3)

review3_4 = Review.create!(restaurant: restaurant3, reason_of_visit: "Date", quality_of_service: 3, noise_level: 4, fits_taste: true, lighting: 3, cleanliness: 4, comment: "The food was amazing. Atmosphere was very cool. However, they mislead us. The waitress came over and said they had extra jello shots and asked if we wanted any. Obviously, extra means free. Oh, we were wrong. We got 4 jello shots. $32.00. yikes. Definitely come here, but don't get the outrageously priced jello shots", user: user4)

review3_5 = Review.create!(restaurant: restaurant3, reason_of_visit: "Celebration", quality_of_service: 5, noise_level: 4, fits_taste: true, lighting: 3, cleanliness: 5, comment: "Shojo is one of my go to spots in Boston if I'm feeling an Asian fusion kind of vibe. I enjoy the drinks there, and I love the kung fu movies they always play above the bar. I've consistently had good service here, and I've been a good dozen times or so. Highly recommended", user: user5)

review4_1 = Review.create!(restaurant: restaurant4, reason_of_visit: "Date", quality_of_service: 5, noise_level: 2, fits_taste: true, lighting: 4, cleanliness: 5, comment: "This place is simply amazing! If you want a great date night where all your senses are enlightened then go here! The servers were so attentative & patient with our questions. We stayed smiling and laughing the whole time... The chef is someone you end up wanting to hug at the end.", user: user1)

review4_2 = Review.create!(restaurant: restaurant4, reason_of_visit: "Dinner", quality_of_service: 5, noise_level: 1, fits_taste: true, lighting: 4, cleanliness: 4, comment: "An excellent and surprisingly affordable (compared to its peers) fine dining experience.  The views of Boston Harbor and the airplanes taking off and landing at Logan are a lovely bonus.  While they take their wines extremely seriously (the wine list has many bottles priced in the hundreds and even thousands of dollars), you can get a very enjoyable three-glass flight to go with your meal for about $25.  Service is on par with the best fine dining available in Boston.  Plating is amazingly playful, with (spoiler alert) dry ice coming with the scallops and the mushroom dish served on a beautiful wooden platter.  All told, you can get out of there for $80 per person with wine, so quite reasonable for what you're getting.  Highly recommended!", user: user2)

review4_3 = Review.create!(restaurant: restaurant4, reason_of_visit: "Dinner", quality_of_service: 4, noise_level: 1, fits_taste: false, lighting: 5, cleanliness: 4, comment: "The views are spectacular and the service is unmatched. However the food was good but not great, especially for the price.", user: user3)

review4_4 = Review.create!(restaurant: restaurant4, reason_of_visit: "Celebration", quality_of_service: 5, noise_level: 2, fits_taste: true, lighting: 4, cleanliness: 5, comment: "Mother's day brunch buffet, lovely views and setting", user: user4)

review4_5 = Review.create!(restaurant: restaurant4, reason_of_visit: "Date", quality_of_service: 5, noise_level: 2, fits_taste: true, lighting: 3, cleanliness: 5, comment: "My girlfriend and I came here for drinks on the patio recently. The staff was very friendly, and we had no trouble getting a table for just drinks during dinner hours. The beer list is very limited, but the mixed drinks make up for it. Prices weren't out of line given the location (~$15/cocktail), and I would say the drinks were worth it. The patio has fire space heaters, and we would come back again in the future.", user: user5)
