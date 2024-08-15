import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const login = (e) => {
    e?.preventDefault();
    console.log("Email", userData?.email);
    console.log("Password", userData?.password);
    if(email == userData?.email && password == userData?.password) {
      navigate('/');
    }else {
      alert('Wrong email or password? Try Again!')
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
          <Link to={`/register`} className="Login__span">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
