import { useState } from "react";
import "./Reservation.scss";
import { useNavigate } from "react-router-dom";
export default function Reservation() {
  const navigator = useNavigate();
  const [reservation, setReservation] = useState({
    firstName: "",
    lastName: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setReservation(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservation);
    setReservation(
      (prev) =>
        (prev = {
          firstName: "",
          lastName: "",
          checkIn: "",
          checkOut: "",
        })
    );
    navigator("/rooms");
  };

  return (
    <div className="signIn">
      <h1>Make your reservation</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          onChange={handleChange}
          value={reservation.firstName}
          placeholder="Name"
        />
        <input
          name="lastName"
          type="text"
          onChange={handleChange}
          value={reservation.lastName}
          placeholder=" Surname"
        />
        <input
          name="checkIn"
          type="date"
          onChange={handleChange}
          value={reservation.checkIn}
        />
        <input
          name="checkOut"
          type="date"
          onChange={handleChange}
          value={reservation.checkOut}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
