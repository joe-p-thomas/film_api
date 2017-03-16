class Relationship < ActiveRecord::Base
  validates :film_id, :related_film_id, presence: true
  validates :related_film_id, uniqueness: { scope: :film_id }

  belongs_to :film
  belongs_to :related_film,
             class_name: 'Film',
             primary_key: :id,
             foreign_key: :related_film_id
end
