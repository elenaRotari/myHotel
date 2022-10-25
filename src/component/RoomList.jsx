import { useState } from "react";
import rooms from "../rooms.json";
import Room from "./Room";
export default function RoomList() {
  const [checkedIn, setCheckedIn] = useState(
    localStorage.getItem("rooms") !== null
      ? JSON.parse(localStorage.getItem("rooms"))
      : rooms
  );
  return (
    <div>
      <h1 className="header">Unsere {checkedIn.length} Rooms</h1>
      <div className="rooms">
        {checkedIn
          .sort((a, b) => a.roomNo - b.roomNo)
          .map((roomItem, index) => {
            return (
              <Room
                key={index}
                room={roomItem}
                setCheckIn={setCheckedIn}
                checkedIn={checkedIn}
              />
            );
          })}
      </div>
    </div>
  );
}
