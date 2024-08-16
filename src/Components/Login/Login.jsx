import { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const login = (e) => {
    e?.preventDefault();
    if (email == userData?.email && password == userData?.password) {
      toast?.success("Successfully Logged In!")
      navigate("/home");
      //Navigating to the Home Page
    } else {
      toast.error("Wrong email or password? Try Again!");
    }
  };

  return (
    <div className="Login">
      <form className="Login__form">
        <div className="Login__form_header">Please Login to Continue</div>
        <div className="inputFields">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            placeholder="Enter your email"
            id="email"
            required
          />
        </div>
        <div className="inputFields">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e?.target?.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button className="Login__btn" onClick={login}>
          Login
        </button>
        <div className="inputInfo">
          <div>Do not have an account? </div>
          <Link to={`/register`} style={{textDecoration: "none"}} className="Login__span">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
