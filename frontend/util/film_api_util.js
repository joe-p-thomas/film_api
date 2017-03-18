export const search = (title) => (
  $.ajax({
    method: 'GET',
    url: `films/search`,
    data: title
  })
);
