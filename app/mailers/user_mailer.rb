class UserMailer < ApplicationMailer
  default from: 'notifications@eatalike.com'

  def new_review_email(user)
    binding.pry
    @user = user
    @url  = 'https://eatalike.herokuapp.com'
    mail(to: @user.email, subject: 'Your restaurant has a new review!')
  end
end
