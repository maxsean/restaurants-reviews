class Api::V1::VotesController < ApplicationController

  def create
    body = JSON.parse(request.body.read)
    vote = Vote.new(body)

    if vote.save
      karma = Vote.getKarma(review_id: body["review_id"])
      render json: { karma: karma }
    else
      user_vote = Vote.find_by(user_id: body["user_id"], review_id: body["review_id"])
      user_vote.update(value: body["value"])

      karma = Vote.getKarma(review_id: body["review_id"])
      render json: { karma: karma }
    end
  end

end
