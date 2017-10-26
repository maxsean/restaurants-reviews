class ReviewMailer < ApplicationMailer
 default from: 'notifications.eatalike@gmail.com'

  def new_review(review)
    @review = review

    mail(
      to: @review.restaurant.user.email,
      subject: "New Review for #{review.restaurant.name}"
    )
  end
end
