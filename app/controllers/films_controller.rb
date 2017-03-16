class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def show
    @film = Film.includes(:related_films).find_by(url_slug: params[:url_slug])

    related_ids = @film.related_films.map(&:related_film_id)
    @related_films = Film.where('id IN (?)', related_ids)
  end

  def search
    param = params[:title].downcase
    @films = Film.where('lower(title) LIKE ?', "%#{param}%")
    render 'films/index'
  end
end
