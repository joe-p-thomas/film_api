class RelatedFilm < ActiveRecord::Base
  validates :film_id, :related_film_id, presence: true
  validates :related_film_id, uniqueness: { scope: :film_id }

  belongs_to :film
end
