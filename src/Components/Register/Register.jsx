import { useState } from "react";
import "./Register.css";
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
/*   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(); */

  const [data, setData] = useState({name: '', email: '', password: ''});


/*   console.log("Name : ", name);
  console.log("Email: ", email);
  console.log("Password : ", password); */

/*   const data = {
    Name: name,
    Email: email, 
    Password: password
  } */

    console.log("data",data);
    

  const handleRegister = (e) => {
    e?.preventDefault();
    localStorage.setItem("user_data", JSON.stringify(data));
    navigate('/login')
  };

  return (
    <div className="Register">
      <form className="Register__form" onSubmit={handleRegister}>
        <div className="Register__form_header">Please Register to Continue</div>
        <div className="inputFields">
          <input
            type="text"
            onChange={(e) => setData({...data, [e?.target?.name]: e?.target?.value})}
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
            onChange={(e) => setData({...data, [e?.target?.name]: e?.target?.value})}
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
            onChange={(e) => setData({...data, [e?.target?.name]: e?.target?.value})}
          />
        </div>
        <button className="Register__btn">Register</button>
        <div className="inputInfo">
          <div>Have an account? </div>
          <span className="Register__span">Login</span>
        </div>
      </form>
    </div>
  );
};

export default Register;
