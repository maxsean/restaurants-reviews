require 'rails_helper'

# As an admin, I can see a list of all users,
# so I can manage the website users.

feature 'admin can see a list of users' do

  let!(:user_admin) {User.create!(id: 1, first_name: "John", last_name: "Smith", username: "johnsmith", email: "john@smith.com", password: "123456", admin: true)}
  let!(:user) {User.create!(id: 2, first_name: "Baba", last_name: "Bepi", username: "bababepi", email: "baba@bepi.com", password: "123456")}

  scenario 'admin visits users index' do
    login_as(user_admin, scope: :user)
    visit '/admin/users'
    expect(page).to have_content(user.username)
  end

  scenario 'unauthorized users are redirected' do
  login_as(user, scope: :user)
  visit '/admin/users'
  expect(page).to have_content('not authorized')
  expect(current_path).to eq(root_path)
end

  scenario 'admin can see a delete link to delete a user' do
    login_as(user_admin, scope: :user)
    visit '/admin/users/2'
    expect(page).to have_content('Delete this user')
  end

  scenario 'admin can delete a user' do
    login_as(user_admin, scope: :user)
    visit '/admin/users/2'
    click_link ("Delete this user")

    expect(page).to_not have_content("bababepi")
  end
end
