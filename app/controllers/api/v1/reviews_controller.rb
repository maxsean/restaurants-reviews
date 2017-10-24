class Api::V1::ReviewsController < ApplicationController

  def create
    body = JSON.parse(request.body.read)
    review = Review.new(reason_of_visit: body["reason_of_visit"],
                        quality_of_service: body["quality_of_service"],
                        noise_level: body["noise_level"],
                        fits_taste: body["fits_taste"],
                        lighting: body["lighting"],
                        cleanliness: body["cleanliness"],
                        comment: body["comment"]
                       )
    # user = User.find(body["review"]["user_id"])
    # UserMailer.new_review_email(user).deliver_now
    binding.pry
    if review.save
      render json: {review: review}
    end
  end

  private
    def review_params
        params.require(:review).permit(:reason_of_visit, :quality_of_service, :noise_level, :lighting,
          :cleanliness, :fits_taste, :comment)
    end
end
