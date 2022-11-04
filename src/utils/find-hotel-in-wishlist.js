export const findHotelInWishlist = (wishlist, id) => {
  const isHotelInWishlist = wishlist.some((hotel) => hotel._id === id);
  return isHotelInWishlist;
};
