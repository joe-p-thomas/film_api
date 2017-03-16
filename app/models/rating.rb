class Rating < ActiveRecord::Base
  validates :film_id, :score, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :film_id }
  validates :score, inclusion: { in: 1..5, message: "must be between 1 and 5" }

  belongs_to :user
  belongs_to :film
end
