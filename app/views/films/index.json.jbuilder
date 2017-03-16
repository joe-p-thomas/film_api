json.films do
  json.array! @films do |film|
    json.partial! 'films/film', film: film
  end
end
