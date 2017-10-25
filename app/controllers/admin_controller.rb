class AdminController < ApplicationController
  before_action :authorize_admin!

  def authorize_admin!
    if current_user.nil? || !current_user.admin?
      flash[:notice] = "You are not authorized to view this resource."
      redirect_to root_path
    end
  end
end
