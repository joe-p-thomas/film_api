class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def show
    @film = Film.find(params[:id])
  end

  def search
    param = params[:title].downcase
    @films = Film.where('lower(title) LIKE ?', param)
    render 'films/index'
  end
end
