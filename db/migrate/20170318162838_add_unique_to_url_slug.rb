class AddUniqueToUrlSlug < ActiveRecord::Migration[5.0]
  def change
    remove_index :films, :url_slug
    add_index :films, :url_slug, unique: true
  end
end
