class Api::V1::ReviewsController < ApplicationController
  def create
    body = JSON.parse(request.body.read)
    user = User.find(body["review"]["user_id"])
    new_review_email(user)
    end
  end
