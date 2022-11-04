import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialValue = {
  wishlist: [],
};

const WishlistContext = createContext(initialValue);

const WishlistProvider = ({ children }) => {
  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialValue
  );

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
