class HomesController < ApplicationController
  def index
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :city, :state)
  end

end
