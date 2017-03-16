class CreateFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :films do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :url_slug, null: false, unique: true
      t.integer :year, null: false
    end

    add_index :films, :title
  end
end
