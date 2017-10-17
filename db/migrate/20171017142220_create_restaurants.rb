class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|

      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :dollar_value, null: false

      t.text :description
      t.string :picture
      t.string :phone_number
      t.string :website_url

      t.timestamps
    end
  end
end
