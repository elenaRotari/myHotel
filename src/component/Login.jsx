import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reservation.scss";
export default function () {
  const navigator = useNavigate();
  const [logIn, setLogIn] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    passwordCheck: true,
  });
  const handleChange = (e) => {
    setLogIn(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogIn(
      (prev) =>
        (prev = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          repeatPassword: "",
        })
    );
    if (logIn.password === logIn.repeatPassword && logIn.password.length > 5) {
      setLogIn((prev) => (prev = { ...prev, passwordCheck: true }));
      navigator("/reservation");
    } else {
      setLogIn((prev) => (prev = { ...prev, passwordCheck: false }));
    }
  };

  return (
    <div className="signIn">
      <h1>Sign In </h1>
      {!logIn.passwordCheck && (
        <p className="checkPassword">Wrong Password ❗❗❗ </p>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={logIn.firstName}
          name="firstName"
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={logIn.lastName}
          name="lastName"
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        <input
          type="email"
          value={logIn.email}
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={logIn.password}
          name="password"
          placeholder="Enter your password min 6 char"
          onChange={handleChange}
        />
        <input
          type="password"
          value={logIn.repeatPassword}
          name="repeatPassword"
          placeholder="Enter again the password "
          onChange={handleChange}
        />
        <button>SignIn</button>
      </form>
    </div>
  );
}
