import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    const data = await axios.post(
      "https://breezetraveloapp.herokuapp.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log(data);
  } catch (err) {
    console.log("error adding user to database");
  }
};
