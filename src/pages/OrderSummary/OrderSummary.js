import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  const handleContinueBooking = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <h1>Order placed successfull</h1>
      <button className="button btn-primary" onClick={handleContinueBooking}>
        Continue Booking
      </button>
    </Fragment>
  );
};
