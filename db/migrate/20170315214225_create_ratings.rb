class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :film_id, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
    end

    add_index :ratings, :film_id
    add_index :ratings, :user_id
    add_index :ratings, [:film_id, :user_id], unique: true
  end
end
