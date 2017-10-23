require 'rails_helper'

# [] As a prospective user I want to create an account So that I can post businesses and review them


feature "users can sign up" do
  scenario "user signs up and can sign out" do

    visit root_path
    click_link "Sign Up"

    fill_in 'First Name', with: "John"
    fill_in 'Last Name', with: "Smith"
    fill_in 'Username', with: "johnsmith17"
    fill_in 'Email', with: "john@smith.com"
    fill_in 'Password', with: "johnsmith2017"
    fill_in 'Confirm Password', with: "johnsmith2017"

    click_button "Submit"

    expect(page).to have_content "signed up successfully"
    expect(page).to have_content "Sign Out"

    click_link "Sign Out"

    expect(page).to have_content "Signed out successfully"
    expect(page).to have_content "Sign Up"
  end

  scenario "user forgets to fill in some fields" do
    visit root_path
    click_link "Sign Up"


    expect(page).to have_content "New User Sign up"

    fill_in 'First Name', with: ""
    fill_in 'Last Name', with: ""
    fill_in 'Username', with: "johnsmith17"
    fill_in 'Email', with: "john@smith.com"
    fill_in 'Password', with: "johnsmith2017"
    fill_in 'Confirm Password', with: "johnsmith2017"

    click_button "Submit"

    expect(page).to have_content "First name can't be blank"
    expect(page).to have_content "Last name can't be blank"
  end

  scenario "user enters two different passwords" do
    visit root_path
    click_link "Sign Up"


    expect(page).to have_content "New User Sign up"

    fill_in 'First Name', with: "John"
    fill_in 'Last Name', with: "Smith"
    fill_in 'Username', with: "johnsmith17"
    fill_in 'Email', with: "john@smith.com"
    fill_in 'Password', with: "johnsmith2016"
    fill_in 'Confirm Password', with: "johnsmith2017"

    click_button "Submit"

    expect(page).to have_content "Password confirmation doesn't match"

  end

end
