class Film < ActiveRecord::Base
  validates :title, :description, :url_slug, :year, presence: true

end
