# Film API
Web application in which users can search and review films.

## Setup
Note: Postgres will need to be installed and running on your computer.

1. `git clone` this repo
2. navigate to the directory
3. `bundle install` and `npm install`
4. `rake db:setup`
5. `rails server`
6. navigate to `localhost:3000/`


## Features
### API Endpoints
#### Film
- `GET /films/search`
  - `title` parameter is passed with http request
  - search is case insensitive
- `GET /films/url/:url_slug`
  - retrieves film detail with the corresponding unique `:url_slug`
- `GET /films`
  - index of all films
#### Rating
- `POST /ratings`
  - create new rating
- `PATCH /ratings/:id`
  - update existing rating
#### User
- `POST /users`
  - signup
#### Session
- `POST /session`
  - login
- `DELETE /session`
  - logout


## Technologies
### Backend
- Ruby on Rails
- Postgres
### Front-end
- React
- Redux

## Future Features
- [ ] Support pagination
- [ ] Support filtering/sorting
- [ ] Support for only retrieving the attributes as listed in the request
