class CreateDiningTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :dining_types do |t|
      t.belongs_to :restaurant_dining_type, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
