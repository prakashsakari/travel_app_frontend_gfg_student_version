import { useHotel, useDate, useFilter } from "../../context";
import { useNavigate } from "react-router-dom";
import "./OrderSummaryComp.css";

export const OrderSummaryComp = () => {

    const navigate = useNavigate();

    const {dateDispatch} = useDate();
    const { filterDispatch} = useFilter();
    const { hotel } = useHotel();
    console.log({hotel})
    const { orderId, name, image, city, state, checkInDate, checkOutDate, totalPayableAmount} = hotel;

    const handleContinueBookingClick = () => {
        dateDispatch({
            type: "CLEAR_INPUTS"
        })
        filterDispatch({
            type: "CLEAR_ALL"
        })
        navigate("/");
    }

    return (
        <div className="os-container d-flex direction-column shadow gap">
            <div className="d-flex align-center justify-space-between br-bottom pd-small">
                <h2>Order Summary</h2>
                <button className="button btn-auth btn-close cursor-pointer d-flex align-center justify-center" onClick={handleContinueBookingClick}>
                    <span class="material-icons-outlined">
                        close
                    </span>
                </button>
            </div>
            <span className="span-md">Booking ID: {orderId}</span>
            <div className="d-flex align-center justify-space-between br-bottom pd-small">

                <div className="d-flex direction-column hoteldetails">
                    <span className="fs-md">{name}</span>
                    <span className="span-md">{city}, {state}</span>
                </div>
                <div>
                    <img className="img" src={image} alt={name} />
                </div>
            </div>
            <div className="d-flex direction-column gap">
                <div className="d-flex direction-column">
                    <span className="span-md">Check In</span>
                    <p className="fs-md">{checkInDate}, 11:00 AM</p>
                </div>
                <div className="d-flex direction-column">
                    <span className="span-md">Check Out</span>
                    <p className="fs-md"> {checkOutDate}, 11:00 AM</p>
                </div>
                <div className="d-flex direction-column">
                    <div className="d-flex align-center justify-space-between">
                        <span className="span-md">Total Amount  Paid</span>
                        <p className="fs-md">Rs. {totalPayableAmount}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="button btn-primary btn-reserve cursor" onClick={handleContinueBookingClick}>Continue Booking</button>
            </div>
        </div>
    )
}