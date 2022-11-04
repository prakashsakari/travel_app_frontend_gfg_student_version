import { AuthLogin, AuthSignup } from "../index";
import "./AuthModal.css";
import { useAuth } from "../../context";

export const AuthModal = () => {
  const { authDispatch, selectedTab } = useAuth();

  const handleLoginClick = () => {
    authDispatch({
      type: "SET_TO_LOGIN",
    });
  };

  const handleSignupClick = () => {
    authDispatch({
      type: "SET_TO_SIGNUP",
    });
  };

  const hanelModalCloseClick = () => {
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };

  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute shadow right-0">
        <div className="d-flex align-center shadow">
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "login" ? "btn-auth-selected" : ""
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "signup" ? "btn-auth-selected" : ""
            }`}
            onClick={handleSignupClick}
          >
            Signup
          </button>
          <button
            className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"
            onClick={hanelModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div>
          {selectedTab === "login" ? (
            <AuthLogin />
          ) : selectedTab === "signup" ? (
            <AuthSignup />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
