/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Home.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("user_data")).token;
  const user = JSON.parse(localStorage.getItem("user_data"))?.name;

  const logOut = () => {
    localStorage.removeItem("user_data");
    navigate("/");
    toast?.info("You have successfully logged out!");
  };

  /* const getData = () => {
    // fetch('https://dummyjson.com/comments', {
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: "GET"
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
  } */

  useEffect(() => {
    // getData();
    if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="Home">
      <div className="Home__header">
        Welcome{" "}
        <span style={{ fontWeight: "bolder", color: "blue" }}>{user}</span>
      </div>
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
      {/*  {
        data && data?.map((user, idx) => (
          <div key={idx}>
            <div>{user?.userAgent}</div>
            <br />
          </div>
        ))
      } */}
      <button onClick={logOut} className="Home__btn">
        Log Out
      </button>
    </div>
  );
};

export default Home;
