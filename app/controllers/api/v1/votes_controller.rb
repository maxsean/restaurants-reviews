class Api::V1::VotesController < ApplicationController

  def create
    body = JSON.parse(request.body.read)
    if body["value"]
      vote = Vote.new(body)

      if vote.save
        review_values = Vote.where(review_id: body["review_id"])
        sum = 0
        review_values.each do |vote|
          sum += vote["value"]
        end
        render json: { karma: sum }
      else
        user_vote = Vote.find_by(user_id: body["user_id"], review_id: body["review_id"])
        user_vote.update(value: body["value"])

        review_values = Vote.where(review_id: body["review_id"])
        sum = 0
        review_values.each do |vote|
          sum += vote["value"]
        end
        render json: { karma: sum }
      end
    else
      user_vote = Vote.find_by(user_id: body["user_id"], review_id: body["review_id"])
      return_value = 0
      
      if !user_vote.nil?
        return_value = user_vote["value"]
      end

      review_values = Vote.where(review_id: body["review_id"])
      sum = 0
      review_values.each do |vote|
        sum += vote["value"]
      end

      render json: { value: return_value, karma: sum }
    end
  end

end
