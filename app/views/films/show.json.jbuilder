json.partial! 'films/film', film: @film

json.userRating do
  if @rating
    json.partial! 'ratings/rating', rating: @rating
  else
    json.score 0
  end
end

json.set! :avgRating, (@film.ratings.sum(&:score).to_f / @film.ratings.count).round(2)

json.related_films do
  json.array! @film.related_films do |related_film|
    json.partial! 'films/film', film: related_film
  end
end
