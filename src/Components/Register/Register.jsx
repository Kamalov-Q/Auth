/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Register.css";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    token: "access_token",
  });

  const navigate = useNavigate();
  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  /* const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; */
  const handleRegister = (e) => {
    if (!namePattern.test(data?.name) || !emailPattern.test(data?.email) || data?.password.length < 8) {
      navigate("/register");
      alert("Invalid");
    } else {
      e?.preventDefault();
      toast.success("Successfully Registered");
      localStorage.setItem("user_data", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div className="Register">
      <form className="Register__form" onSubmit={handleRegister}>
        <div className="Register__form_header">Please Register to Continue</div>
        <div className="inputFields">
          <input
            type="text"
            onChange={(e) =>
              setData({ ...data, [e?.target?.name]: e?.target?.value })
            }
            placeholder="Enter your name"
            id="name"
            name="name"
            required
            value={data?.name}
          />
        </div>
        <div className="inputFields">
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            required
            name="email"
            value={data?.email}
            onChange={(e) =>
              setData({ ...data, [e?.target?.name]: e?.target?.value })
            }
          />
        </div>
        <div className="inputFields">
          <input
            type="password"
            id="password"
            required
            name="password"
            value={data?.password}
            placeholder="Enter your password"
            onChange={(e) =>
              setData({ ...data, [e?.target?.name]: e?.target?.value })
            }
          />
        </div>
        <button className="Register__btn">Register</button>
        <div className="inputInfo">
          <div>Have an account? </div>
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            className="Register__span"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
