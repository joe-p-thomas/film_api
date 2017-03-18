class RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
    @rating.user = current_user
    if @rating.save
      @film = Film.includes(:related_films, :ratings).find(@rating.film_id)
      render 'films/show'
    else
      render json: @rating.errors.full_messages, status: 400
    end
  end

  def update
    @rating = Rating.find(params[:id])
    if @rating.update_attributes(rating_params)
      @film = Film.includes(:related_films, :ratings).find(@rating.film_id)
      render 'films/show'
    else
      render json: @rating.errors.full_messages, status: 400
    end
  end

  private

  def rating_params
    params.permit(:film_id, :score)
  end
end
