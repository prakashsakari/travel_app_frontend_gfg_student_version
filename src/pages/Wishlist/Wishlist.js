import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, HotelCard, ProfileDropDown, AuthModal, Alert } from "../../components";
import { useWishlist, useAuth, useAlert } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();
  const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
  const { alert } = useAlert();
  const navigate = useNavigate();

  const handleClickHereClick = () => {
    navigate("/")
  }

  return (
    <Fragment>
      <Navbar route="wishlist" />
      <h2 className="heading-2 d-flex justify-center">Your Wishlist</h2>
      {
        wishlist.length > 0 ? <section className="wishlist-page d-flex align-center wrap gap-larger">
          {wishlist &&
            wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
        </section> : <p className="d-flex justify-center">Wishlist Empty. &nbsp;<span className="click-here" onClick={handleClickHereClick}>Click here </span> &nbsp; to add to wishslit</p>
      }
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
    </Fragment>
  );
};
