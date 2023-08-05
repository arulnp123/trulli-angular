import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
// import Moment from 'react-moment';
// import 'moment-timezone';

const Register = () => {
  const unique_id = uuid();
  const [register, setRegister] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    conPassword: "",
    status: "1",
    apiToken: unique_id,
    createdDate: new Date(),
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    conPassword: "",
  });


  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!register.fName.trim()) {
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!register.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!register.email.trim()) {
      errors.email = "Email is required";
    } else if (!register.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = register.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!register.conPassword) {
      errors.conPassword = "Password confirmation is required";
    } else if (register.conPassword !== register.password) {
      errors.conPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  // useEffect(() => {
  //   checkValidation();
  // }, [register]);




  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    checkValidation();
     try {
      axios.post("http://localhost:8800/register", register);
      navigate("/");
    } catch (error) {
      console.log("error->" + error);
    }
  };
  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(register);

  return (
    <form className="form">
      <h1>Add New Users</h1>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="fName"
        value={register.fName}
      />
      {validation.fName && <p>{validation.fName}</p>}
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lName"
        value={register.lName}
      />
      {validation.lName && <p>{validation.lName}</p>}
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={register.email}
      />
       {validation.email && <p>{validation.email}</p>}
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
        value={register.password}
      />
      {validation.password && <p>{validation.password}</p>}
      <input
        type="password"
        placeholder="confirm password"
        onChange={handleChange}
        name="conPassword"
        value={register.conPassword}
      />
       {validation.conPassword && <p>{validation.conPassword}</p>}

      <button className="formButton" onClick={handleRegisterSubmit}>
        Add
      </button>
    </form>
  );
};

export default Register;
