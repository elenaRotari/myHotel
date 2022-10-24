import "./App.scss";
import rooms from "./rooms.json";
import Room from "./component/Room";
import { useState } from "react";
function App() {
  const [checkedIn, setCheckedIn] = useState(
    localStorage.getItem("rooms") !== null
      ? JSON.parse(localStorage.getItem("rooms"))
      : rooms
  );

  return (
    <div className="App">
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

export default App;
