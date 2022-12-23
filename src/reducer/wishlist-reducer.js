export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((hotel) => hotel._id !== payload),
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: []
      }
    default:
      return state
  }
};
