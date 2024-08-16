/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./Home.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("user_data"))?.token;

  const logOut = () => {
    localStorage.removeItem("user_data");
    navigate('/');
    toast.info("You have successfully logged out!");
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="Home">
      <div className="Home__header">Welcome to the Home Page</div>
      <div className="Home__info">This is the Home Page</div>
      <Link to={"/"} className="login" style={{ textDecoration: "none" }}>
        Go to Login
      </Link>
      <Link
        to={"/register"}
        style={{ textDecoration: "none", margin: "10px" }}
        className="register"
      >
        Go to Register Page
      </Link>
      <button onClick={logOut} className="Home__btn">
        Log Out
      </button>
    </div>
  );
};

export default Home;
