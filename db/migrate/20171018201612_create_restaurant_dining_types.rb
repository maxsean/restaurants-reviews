class CreateRestaurantDiningTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_dining_types do |t|
      t.belongs_to :restaurant, null: false
      t.belongs_to :dining_type, null: false

      t.timestamps
    end
  end
end
