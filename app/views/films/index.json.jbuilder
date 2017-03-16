@films.each do |film|
  json.set! film.id do
    json.partial! 'films/film', film: film
  end
end
