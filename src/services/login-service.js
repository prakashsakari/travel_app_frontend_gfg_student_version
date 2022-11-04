import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: { accessToken: accessToken, username },
    } = await axios.post(
      "https://breezetraveloapp.herokuapp.com/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log("Logged IN");
    console.log({ accessToken, username });
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};
