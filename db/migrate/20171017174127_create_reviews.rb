class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :restaurant, null: false
      t.string :reason_of_visit, null: false
      t.integer :quality_of_service, null: false
      t.integer :noise_level, null: false
      t.boolean :fits_taste, null: false
      t.integer :lighting, null: false
      t.integer :cleanliness, null: false
      t.text :comment

      t.timestamps
    end
  end
end
