class Api::V1::UsersController < ApplicationController

  def index
    render json: { user: current_user }
  end
end
