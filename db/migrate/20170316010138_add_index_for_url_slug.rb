class AddIndexForUrlSlug < ActiveRecord::Migration[5.0]
  def change
    add_index :films, :url_slug
  end
end
