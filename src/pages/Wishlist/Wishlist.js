import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components";
import { useWishlist } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <Fragment>
      <Navbar />
      <h2 className="heading-2">Your Wishlist</h2>
      <section className="wishlist-page d-flex align-center wrap gap-larger">
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
    </Fragment>
  );
};
