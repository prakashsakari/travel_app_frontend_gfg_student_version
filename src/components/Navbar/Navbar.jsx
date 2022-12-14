import "./Navbar.css";
import { useDate, useAuth } from "../../context";
import { Link } from "react-router-dom";

export const Navbar = ({route}) => {
  const { destination, dateDispatch, checkInDate, checkOutDate, guests } =
    useDate();

  const { authDispatch, accessToken } = useAuth();

  const handleSearchClick = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };

  const handleAuthClick = () => {
    if (accessToken) {
      authDispatch({
        type: "SHOW_DROP_DOWN_OPTIONS"
      })
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }

  };

  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <Link className="link" to="/">
          TravelO
        </Link>
      </h1>
      {
        route !== "wishlist" && <div
        className="form-container d-flex align-center cursor-pointer shadow"
        onClick={handleSearchClick}
      >
        <span className="form-option">{route === "home" ? "Any Where" : (destination || "Any Where")}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkInDate && checkOutDate && route !== "home"
            ? `${checkInDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })} - ${checkOutDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}`
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {route !== "home" && guests > 0 ? `${guests} guests` : "Add Guests"}
        </span>
        <span class="search material-icons-outlined">search</span>
      </div>
      }
      
      <nav className="d-flex align-center gap-large" onClick={handleAuthClick}>
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-icons-outlined profile-option menu">
            menu
          </span>
          <span className="material-icons-outlined profile-option person">
            person_2
          </span>
        </div>
      </nav>
    </header>
  );
};
