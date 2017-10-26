class Admin::UsersController < AdminController
  def index
    @users =  User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    @user.reviews.each do |review|
      review.destroy
    end

    @user.restaurants.each do |restaurant|
      restaurant.destroy
    end

    @user.destroy
    flash[:notice] = "User deleted"
    redirect_to admin_users_path
  end
end
