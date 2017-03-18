export const search = (title) => (
  $.ajax({
    method: 'GET',
    url: 'film/search',
    data: {title}
  })
);
