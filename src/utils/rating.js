export const getHotelsByRatings = (hotels, rating) => {
  const filteredHotels = hotels.filter((hotel) => hotel.rating >= rating);
  return filteredHotels;
};
