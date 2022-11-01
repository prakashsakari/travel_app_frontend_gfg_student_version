export const getHotelsByCancelation = (hotels, isCancelable) => {
  const filteredHotels = hotels.filter(
    (hotel) => hotel.isCancelable === isCancelable
  );
  return filteredHotels;
};
