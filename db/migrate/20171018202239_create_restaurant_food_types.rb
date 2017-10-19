class CreateRestaurantFoodTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_food_types do |t|
      t.belongs_to :restaurant, null: false
      t.belongs_to :food_type, null: false

      t.timestamps
    end
  end
end
