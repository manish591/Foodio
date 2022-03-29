import axios from "axios";
import { useAuthContext } from "./";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const {
    isUserLogedIn,
    myToken,
    currentUser,
    setIsUserLogedIn,
    setMyToken,
    setCurrentUser,
  } = useAuthContext();

  const navigate = useNavigate();

  const loginUser = async ({ email, password }) => {
    try {
      let res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res.status === 200) {
        setIsUserLogedIn(true);
        setMyToken(res.data.encodedToken);
        setCurrentUser(res.data.foundUser);
        navigate("/explore");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signupUser = async ({
    firstName,
    lastName = "dev",
    email,
    password,
  }) => {
    try {
      let res = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(res);
      if (res.status === 201) {
        setIsUserLogedIn(true);
        setMyToken(res.data.encodedToken);
        setCurrentUser(res.data.createdUser);
        navigate("/explore");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { loginUser, signupUser };
};

export { useAuth };
