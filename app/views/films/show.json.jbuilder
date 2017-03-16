json.partial! 'films/film', film: @film
json.related_films do
  json.array! @film.related_films do |related_film|
    json.partial! 'films/film', film: related_film
  end
end
