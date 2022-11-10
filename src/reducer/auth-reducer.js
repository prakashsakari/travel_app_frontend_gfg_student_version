export const authReducer = (state, {
  type,
  payload
}) => {
  switch (type) {
    case "SHOW_AUTH_MODAL":
      return {
        ...state,
        isAuthModalOpen: !state.isAuthModalOpen,
      };
    case "SET_TO_LOGIN":
      return {
        ...state,
        selectedTab: "login",
      };
    case "SET_TO_SIGNUP":
      return {
        ...state,
        selectedTab: "signup",
      };
    case "NUMBER":
      return {
        ...state,
        number: payload,
      };
    case "NAME":
      return {
        ...state,
        username: payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: payload,
      };
    case "CLEAR_USER_DATA":
      return {
        ...state,
        username: "",
          number: "",
          email: "",
          password: "",
          confirmPassword: "",
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: payload,
      };
    case "SET_USER_NAME":
      return {
        ...state,
        name: payload,
      };
    case "SHOW_DROP_DOWN_OPTIONS":
      return {
        ...state,
        isDropDownModalOpen: !state.isDropDownModalOpen
      }
    case "CLEAR_CREDENTIALS":
      return {
        ...state,
        accessToken: "",
        name: ""
      }
      default:
        return state;
  }
};