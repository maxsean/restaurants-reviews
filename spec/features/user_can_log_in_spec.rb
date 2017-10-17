require 'rails_helper'

# As an authenticated user, I want to be able to log in to my account, so I can use the app.

feature "users can log in" do
  scenario "user can log in" do
    User.create(first_name: "Simon", last_name: "Smith", username: "simonsmith", email: "simon@smith.com", password: "1234567")

    visit root_path
    click_link "Log In"

    fill_in "Email", with: "simon@smith.com"
    fill_in "Password", with: "1234567"

    click_button "Log in"

    expect(page).to have_content "Signed in successfully"
  end

  scenario "user specify invalid information" do
    User.create(first_name: "Simon", last_name: "Smith", username: "simonsmith", email: "simon@smith.com", password: "1234567")

    visit root_path
    click_link "Log In"

    fill_in "Email", with: "simon@smith.com"
    fill_in "Password", with: ""

    click_button "Log in"

    expect(page).to have_content "Invalid Email or password"
  end


end
