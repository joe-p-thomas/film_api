class CreateRelatedFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :related_films do |t|
      t.integer :film_id, null: false
      t.integer :related_film_id, null: false
    end

    add_index :related_films, :film_id
    add_index :related_films, [:film_id, :related_film_id], unique: true
  end
end
