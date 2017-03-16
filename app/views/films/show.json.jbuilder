json.partial! 'films/film', film: @film
json.related_films do
  json.array! @film.related_films do |film|
    json.partial! 'films/film', film: film
  end
end
