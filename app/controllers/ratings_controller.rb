class RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render 'ratings/show'
    else
      render json: @rating.errors.full_messages, status: 400
    end
  end

  private

  def rating_params
    params.permit(:film_id, :score, :user_id)
  end
end
