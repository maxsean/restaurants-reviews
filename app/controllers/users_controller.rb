class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    binding.pry
    @user = User.find(params[:id])
  end
end
