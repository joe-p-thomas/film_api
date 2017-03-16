class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def show
    @film = Film.includes(:related_films).find_by(url_slug: params[:url_slug])
  end

  def search
    param = params[:title].downcase
    @films = Film.where('lower(title) LIKE ?', "%#{param}%")
    render 'films/index'
  end
end
