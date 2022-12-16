import "./FinalPrice.css";
import { useDate, useAuth, useAlert } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";

export const FinalPrice = ({ singleHotel }) => {
  const { _id, price, rating } = singleHotel;

  const navigate = useNavigate();

  const { guests, dateDispatch, checkInDate, checkOutDate } = useDate();

  const { setAlert } = useAlert();

  const { accessToken, authDispatch } = useAuth();

  const handleGuestChange = (event) => { 
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  const handleReserveClick = () => {
    if (!checkInDate) {
      setAlert({
        open: true,
        message: "Select a Check-in Date",
        type: "info"
      })
    } else if (!checkOutDate) {
      setAlert({
        open: true,
        message: "Select a Check-out Date",
        type: "info"
      })
    } else if (guests < 1) {
      setAlert({
        open: true,
        message: "Add number of guests",
        type: "info"
      })
    } else if (accessToken) {
      navigate(`/confirm-booking/stay/${_id}`);
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL"
      })
    }
  };

  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs. {price}</span> night
        </p>
        <span className="rating d-flex align-center">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates">
          <div className="checkin loc-container">
            <label className="label">Check in</label>
            <DateSelector checkInType="in" />
          </div>
          <div className="checkin loc-container">
            <label className="label">Check Out</label>
            <DateSelector checkInType="out" />
          </div>
        </div>
        <div className="guests gutter-sm">
          <p>GUESTS</p>
          {guests <= 0 ? (
            <input
              className="guest-count-input"
              type="number"
              placeholder="Add Guests"
              value={guests}
              onChange={handleGuestChange}
            />
          ) : (
            <span>{guests} guests</span>
          )}
        </div>
      </div>
      <div>
        <button
          className="button btn-reserve btn-primary cursor"
          onClick={handleReserveClick}
        >
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rd. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service fee</span>
          <span className="span">Rd. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price * 2 + 200}</span>
        </div>
      </div>
    </div>
  );
};
