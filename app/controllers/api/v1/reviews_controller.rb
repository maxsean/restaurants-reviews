class Api::V1::ReviewsController < ApplicationController

  def index
    render json: { reviews: Review.all }
  end

  def create
    body = JSON.parse(request.body.read)
    review = Review.new(
      reason_of_visit: body["reason_of_visit"],
      quality_of_service: body["quality_of_service"],
      noise_level: body["noise_level"],
      fits_taste: body["fits_taste"],
      lighting: body["lighting"],
      cleanliness: body["cleanliness"],
      comment: body["comment"],
      user_id: body["user_id"],
      restaurant_id: body["restaurant_id"]
     )

    if review.save
      ReviewMailer.new_review(review).deliver_now
      render json: {review: review}
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
  end


end
