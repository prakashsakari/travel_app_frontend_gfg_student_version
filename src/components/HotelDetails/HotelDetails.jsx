import "./HotelDetails.css";

export const HotelDetails = ({ singleHotel }) => {
  const {
    hostName,
    hostJoinedOn,
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
  } = singleHotel;

  return (
    <div className="hotel-details-container">
      <div className="host-details">
        <p className="host-name p">
          Hosted by {hostName}, Joined on {hostJoinedOn}
        </p>
        <div className="span hotel-room-details">
          {numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds}{" "}
          beds. {numberOfBathrooms} bathrooms.
        </div>
      </div>
      <div className="key-features host-details">
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center gap">
            <span class="apps material-icons-outlined">apps</span>Dedicated
            Workspace
          </p>
          <span className="span">
            A common area with wifi that is well suited for working
          </span>
        </div>
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center gap">
            <span class="apps material-icons-outlined">apps</span>Great Location
          </p>
          <span className="span">
            80% of recent guests gave the location a 5-star rating
          </span>
        </div>
        <p className="p d-flex align-center gap">
          <span class="apps material-icons-outlined">apps</span>Free
          cancellation before 7 days of booking
        </p>
      </div>
      <div className="amenities-container">
        <p className="p amenities">What this place offers</p>
        <div className="d-flex gap-xxl">
          <div className="d-flex direction-column">
            <span className="span d-flex align-center gap">
              <span class="apps material-icons-outlined">apps</span>Kitchen
            </span>
            <span className="span d-flex align-center gap">
              <span class="apps material-icons-outlined">apps</span>Free parking
              on premises
            </span>
            <span className="span d-flex align-center gap">
              <span class="apps material-icons-outlined">apps</span>Dedicated
              Workspace
            </span>
          </div>
          <div className="d-flex direction-column">
            <span className="span d-flex align-center gap">
              <span class="apps material-icons-outlined">apps</span>Wifi
            </span>
            <span className="span d-flex align-center gap">
              <span class="apps material-icons-outlined">apps</span>Washing
              Machine
            </span>
            <span className="span d-flex align-center gap">
              <span class="apps material-icons-outlined">apps</span>Patio or
              Balcony
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
