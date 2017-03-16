class RenameRelationshipTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :related_films, :relationships
  end
end
