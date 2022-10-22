import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <a className="link" href="/">
          TravelO
        </a>
      </h1>
      <div className="form-container d-flex align-center cursor-pointer shadow">
        <span className="form-option">Any Where</span>
        <span className="border-right-1px"></span>
        <span className="form-option">Any Week</span>
        <span className="border-right-1px"></span>
        <span className="form-option">Add Guests</span>
        <span class="search material-icons-outlined">search</span>
      </div>
      <nav className="d-flex align-center gap-large">
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
