import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { loginStore } from '../action/loginAction'
 import { useNavigate } from "react-router-dom";
 import { store } from '../app/store.js';

 
const Login = () => {
 const navigate = useNavigate();

  const dispatch = useDispatch()
  const rUsers =  store.getState().value

  console.log(rUsers);
   
  const [login, setLogin] = useState({
    email: "",
    password: "", 
  });


  // const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {

    e.preventDefault();
    try {
      axios.post("http://localhost:8800/login", login).then(res => {
        console.log(res.data[0]);
        // dispatch(loginStore({
        //   id : res.data[0].id,
        //   first_name : res.data[0].first_name,
        //   last_name : res.data[0].last_name,
        //   email : res.data[0].email,
        //   password : res.data[0].password,
        //   api_token : res.data[0].api_token,
        // }))
        dispatch(loginStore(res.data[0].api_token))
      });
        navigate("/books");
    } catch (error) {
      console.log("error->" + error);
    }
  };
  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(login);

  return (
    <div className="form">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
      />
      <input
        type="text"
        placeholder="password"
        onChange={handleChange}
        name="password"
      />
       
      <button className="formButton" onClick={handleLoginSubmit}>
        Login
      </button>

    </div>
  );
};

export default Login;
