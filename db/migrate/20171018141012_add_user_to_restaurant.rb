class AddUserToRestaurant < ActiveRecord::Migration[5.1]
  def up
    add_column :restaurants, :user_id, :integer, null: false
  end

  def down
    remove_column :restaurants, :user_id
  end
end
