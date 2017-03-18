# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guest = User.create(username: 'guest',
                    password: 'password')


film1 = Film.create(title: 'A Wonderful Film',
                    description: 'A cute film about lots of wonderful stuff.',
                    url_slug: 'a_wonderful_film',
                    year: 1973)

film2 = Film.create(title: 'All About Fandor',
                    description: 'Documentary telling the tail of Fandor.',
                    url_slug: 'all_about_fandor',
                    year: 2001)

film3 = Film.create(title: 'Dancing with Elephants',
                    description: 'The classic tale of Dancing with Wolves, but with elephants!',
                    url_slug: 'dancing_with_elephants',
                    year: 2016)

film4 = Film.create(title: 'The Story of George',
                    description: 'A true story outlining the adventures of George.',
                    url_slug: 'the_story_of_george',
                    year: 1974)

film5 = Film.create(title: 'Zee and Bee Go Skiing',
                    description: 'The tragic story of Zee and Bee on their snowy adventures.',
                    url_slug: 'zee_and_bee_go_skiing',
                    year: 1991)

film6 = Film.create(title: 'Ahead of Its Time',
                    description: 'A story about the future.',
                    url_slug: 'ahead_of_its_time',
                    year: 2088)

film7 = Film.create(title: 'My Name is Jerry',
                    description: 'The life of the cat named Jerry',
                    url_slug: 'my_name_is_jerry',
                    year: 1989)

film8 = Film.create(title: 'Gems and Trestle',
                    description: 'Is it about web development? Mining history? You\'ll never know.',
                    url_slug: 'gems_and_trestle',
                    year: 2011)

film9 = Film.create(title: 'How To React Natively',
                    description: 'A step by step journey through developing a React Native application.',
                    url_slug: 'how_to_react_natively',
                    year: 2000)

film10 = Film.create(title: 'Perry Hotter: A Lizard\'s Tale',
                     description: 'It\'s a story all about a lizard named Perry.',
                     url_slug: 'perry_hotter_a_lizards_tale',
                     year: 2017)


Relationship.create(film_id: film1.id,
                    related_film_id: film2.id)

Relationship.create(film_id: film1.id,
                    related_film_id: film4.id)

Relationship.create(film_id: film1.id,
                    related_film_id: film7.id)

Relationship.create(film_id: film2.id,
                    related_film_id: film1.id)

Relationship.create(film_id: film2.id,
                    related_film_id: film4.id)

Relationship.create(film_id: film2.id,
                    related_film_id: film7.id)

Relationship.create(film_id: film4.id,
                    related_film_id: film1.id)

Relationship.create(film_id: film4.id,
                    related_film_id: film2.id)

Relationship.create(film_id: film4.id,
                    related_film_id: film7.id)

Relationship.create(film_id: film5.id,
                    related_film_id: film6.id)

Relationship.create(film_id: film5.id,
                    related_film_id: film8.id)

Relationship.create(film_id: film5.id,
                    related_film_id: film9.id)

Relationship.create(film_id: film5.id,
                    related_film_id: film10.id)

Relationship.create(film_id: film6.id,
                    related_film_id: film8.id)

Relationship.create(film_id: film6.id,
                    related_film_id: film9.id)

Relationship.create(film_id: film6.id,
                    related_film_id: film10.id)

Relationship.create(film_id: film7.id,
                    related_film_id: film1.id)

Relationship.create(film_id: film7.id,
                    related_film_id: film2.id)

Relationship.create(film_id: film7.id,
                    related_film_id: film4.id)

Relationship.create(film_id: film8.id,
                    related_film_id: film9.id)

Relationship.create(film_id: film8.id,
                    related_film_id: film10.id)

Relationship.create(film_id: film9.id,
                    related_film_id: film10.id)
