class Api::V1::UsersController < ApplicationController

  def index
    if current_user
      render json: { user: current_user }
    else
      render json: { user: null }
    end
  end

  def create
    body = JSON.parse(request.body.read)

    user_vote = Vote.find_by(user_id: body["user_id"], review_id: body["review_id"])
    return_value = 0

    if !user_vote.nil?
      return_value = user_vote["value"]
    end

    karma = Vote.getKarma(review_id: body["review_id"])

    render json: { value: return_value, karma: karma }
  end
end
