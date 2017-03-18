export const search = (title) => (
  $.ajax({
    method: 'GET',
    url: `films/search`,
    data: title
  })
);

export const filmDetail = (urlSlug) => (
  $.ajax({
    method: 'GET',
    url: `films/url/${urlSlug}`
  })
);
