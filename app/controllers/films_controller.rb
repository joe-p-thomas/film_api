class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def show
    @film = Film.includes(:related_films, :ratings)
      .find_by(url_slug: params[:url_slug])
    @rating = @film.ratings.where('user_id = ?', current_user.id).first
  end

  def search
    param = params[:title].downcase
    @films = Film.where('lower(title) LIKE ?', "%#{param}%")
    render 'films/index'
  end
end
