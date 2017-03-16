class ChangeRatingColName < ActiveRecord::Migration[5.0]
  def change
    rename_column :ratings, :rating, :score
  end
end
