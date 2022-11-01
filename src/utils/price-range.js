export const getHotelsByPrice = (hotels, priceRange) => {
  const filteredHotels = hotels.filter(
    (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
  );
  return filteredHotels;
};
