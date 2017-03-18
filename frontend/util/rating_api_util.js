export const submitRating = (rating) => (
  $.ajax({
    method: 'POST',
    url: 'ratings',
    data: rating
  })
);

export const updateRating = (rating) => (
  $.ajax({
    method: 'PATCH',
    url: `ratings/${rating.id}`,
    data: rating
  })
);
