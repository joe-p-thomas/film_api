class Film < ActiveRecord::Base
  validates :title, :description, :url_slug, :year, presence: true

  has_many :ratings, dependent: :destroy
  has_many :relationships, dependent: :destroy
  has_many :related_films, through: :relationships
end
