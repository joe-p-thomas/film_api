class Rating < ActiveRecord::Base
  validates :film_id, :rating, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :film_id }

  belongs_to :user
  belongs_to :film 
end
