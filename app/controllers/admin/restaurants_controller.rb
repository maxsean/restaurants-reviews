class Admin::RestaurantsController < AdminController
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])

    @restaurant.reviews.each do |review|
      review.destroy
    end

    @restaurant.destroy
    flash[:notice] = "User deleted"
    redirect_to admin_restaurants_path
  end
end
