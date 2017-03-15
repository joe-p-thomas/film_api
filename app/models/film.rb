class Film < ActiveRecord::Base
  validates :title, :description, :url_slug, :year, presence: true

  has_many :ratings, dependent: :destroy
  has_many :related_films, dependent: :destroy
end
