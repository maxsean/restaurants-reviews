class CreateFoodTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :food_types do |t|
      t.belongs_to :restaurant_food_type, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
