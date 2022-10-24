import { useEffect } from "react";
export default function Room({ room, setCheckIn, checkedIn }) {
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(checkedIn));
  }, [checkedIn]);
  const reverse = (str) => {
    return str.split("-").reverse().join(".");
  };

  return (
    <div className="roomsItem">
      <h2>Room: {room.roomNo}</h2>
      <ul className="firstLastName">
        <li>First Name: {room.guest.firstName}</li>
        <li>Last Name: {room.guest.lastName}</li>
      </ul>
      <p>{reverse(room.checkIn)}</p>
      <p>{reverse(room.checkOut)}</p>
      <p className={room.checkedIn ? "no" : "yes"}>
        {room.checkedIn ? "The Room is not available" : "The room is available"}
      </p>
      <button
        className={room.checkedIn ? "no" : "yes"}
        onClick={() => {
          setCheckIn(
            checkedIn.map((el) =>
              el.roomNo === room.roomNo
                ? { ...el, checkedIn: !el.checkedIn }
                : el
            )
          );
        }}
      >
        {room.checkedIn ? "CheckOut" : "CheckIn"}
      </button>
    </div>
  );
}
